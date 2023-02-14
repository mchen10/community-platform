/**
 * Time to wait before checking database for updates to try ensure writes
 * TODO - CC 2022-04-25 - Likely some of these waits can be replaced by search for UI elements
 * that should respond to change
 */
const DB_WAIT_TIME = 5000

describe('[Notifications]', () => {
  it('[are not generated when the howTo author is triggering notification]', () => {
    cy.visit('how-to')
    cy.login('event_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get('[data-cy="vote-useful"]').contains('Useful').click()
    cy.step('Verify the notification has not been added')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        expect(docs[0]['notifications']).to.be.undefined
      },
    )
  })

  it('[are generated by clicking on useful for how-tos]', () => {
    cy.visit('how-to')
    cy.login('howto_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get('[data-cy="vote-useful"]').contains('Useful').click()
    cy.wait(DB_WAIT_TIME)
    cy.step('Verify the notification has been added')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        const user = docs[1]
        let notifications = user['notifications']
        expect(notifications.length).to.equal(1)
        expect(notifications[0]['type']).to.equal('howto_useful')
        expect(notifications[0]['relevantUrl']).to.equal(
          '/how-to/testing-testing',
        )
        expect(notifications[0]['read']).to.equal(false)
        expect(notifications[0]['triggeredBy']['displayName']).to.equal(
          'howto_reader',
        )
      },
    )
  })

  it('[are generated by clicking on useful for research]', () => {
    cy.visit('research')
    cy.login('howto_reader@test.com', 'test1234')
    cy.visit('/research/qwerty')
    cy.get('[data-cy="vote-useful"]').contains('Useful').click()
    cy.wait(DB_WAIT_TIME)
    cy.step('Verify the notification has been added')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        const user = docs[1]
        let notifications = user['notifications']
        expect(notifications.length).to.equal(1)
        expect(notifications[0]['type']).to.equal('research_useful')
        expect(notifications[0]['relevantUrl']).to.equal('/research/qwerty')
        expect(notifications[0]['read']).to.equal(false)
        expect(notifications[0]['triggeredBy']['displayName']).to.equal(
          'howto_reader',
        )
      },
    )
  })

  it('[are generated by adding comments]', () => {
    cy.visit('how-to')
    cy.login('howto_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get('[data-cy="comments-form"]').type('some sample comment')
    cy.get('[data-cy="comment-submit"]').click()
    cy.wait(DB_WAIT_TIME)
    cy.step('Verify the notification has been added')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        const user = docs[1]
        let notifications = user['notifications']
        expect(notifications.length).to.equal(1)
        expect(notifications[0]['type']).to.equal('new_comment')
        expect(notifications[0]['relevantUrl']).to.equal(
          '/how-to/testing-testing',
        )
        expect(notifications[0]['read']).to.equal(false)
        expect(notifications[0]['triggeredBy']['displayName']).to.equal(
          'howto_reader',
        )
      },
    )
  })

  it('[are generated by adding comments to research]', () => {
    cy.visit('how-to')
    cy.login('howto_reader@test.com', 'test1234')
    cy.visit('/research/qwerty')
    cy.get('[data-cy="ResearchComments: button open-comments"]').first().click()
    cy.get('[data-cy="comments-form"]').type('some sample comment')
    cy.get('[data-cy="comment-submit"]').click()
    cy.wait(DB_WAIT_TIME)
    cy.step('Verify the notification has been added')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        const user = docs[1]
        let notifications = user['notifications']
        expect(notifications.length).to.equal(1)
        expect(notifications[0]['type']).to.equal('new_comment_research')
        expect(notifications[0]['relevantUrl']).to.equal(
          '/research/qwerty#update_0',
        )
        expect(notifications[0]['read']).to.equal(false)
        expect(notifications[0]['triggeredBy']['displayName']).to.equal(
          'howto_reader',
        )
      },
    )
  })

  it('[appear in notifications modal]', () => {
    cy.visit('how-to')
    cy.login('event_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get(
      '[data-cy="notifications-desktop"] [data-cy="toggle-notifications-modal"]',
    ).click()
    const notifications = cy.get('[data-cy="notification"]')
    expect(notifications).to.exist
  })

  it('[notifications modal is closed when clicking on the notifications icon for the second time or clicking on the header]', () => {
    cy.visit('how-to')
    cy.login('event_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get(
      '[data-cy="notifications-desktop"] [data-cy="toggle-notifications-modal"]',
    ).click()
    let notificationsModal = cy.get('[data-cy="notifications-modal-desktop"]')
    expect(notificationsModal).to.exist
    //click on the notifications button again
    cy.get(
      '[data-cy="notifications-desktop"] [data-cy="toggle-notifications-modal"]',
    ).click()
    notificationsModal = cy.get('[data-cy="notifications-modal-desktop"]')
    notificationsModal.should('not.exist')
    //click within the header area
    cy.get(
      '[data-cy="notifications-desktop"] [data-cy="toggle-notifications-modal"]',
    ).click()
    cy.get('[data-cy="header"]').click()
    notificationsModal = cy.get('[data-cy="notifications-modal-desktop"]')
    notificationsModal.should('not.exist')
  })

  it('[are marked read when clicking on clear button]', () => {
    cy.visit('how-to')
    cy.login('event_reader@test.com', 'test1234')
    cy.visit('/how-to/testing-testing')
    cy.get(
      '[data-cy="notifications-desktop"] [data-cy="toggle-notifications-modal"]',
    ).click()
    cy.get('[data-cy="clear-notifications"]').click()
    cy.wait(DB_WAIT_TIME)
    cy.step('Verify the notification have been marked read')
    cy.queryDocuments('users', 'userName', '==', 'event_reader').then(
      (docs) => {
        expect(docs.length).to.be.greaterThan(0)
        const user = docs[1]
        const notifications = user['notifications']
        expect(notifications.length).to.be.greaterThan(0)
        notifications.forEach((n) => {
          expect(n['read']).to.be.true
        })
      },
    )
    const noNotificationsText = 'Nada, no new notifications'
    cy.get('[data-cy="NotificationList: empty state"]').should('exist')
  })
})
