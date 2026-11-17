# Scope

## Included in version 1

### App (one platform first)
- Login
- Record with pause and resume
- Pick section, lesson number, and date
- Background upload with retry
- Build the title from those fields and confirm it before publishing
- Publish
- Share the link via WhatsApp
- View the list of lectures with the ability to edit the title and unpublish

### Website
- Public page per teacher
- Nested sections
- Lecture list per section
- Lecture page with audio player
- WhatsApp link previews
- Search

### Backend
- Teacher login
- Teacher records
- Nested sections and lectures
- Presigned uploads
- Public read endpoints for published lectures only
- Database backups

## Not in version 1
- AI transcription and title suggestions
- The second platform
- The second Ustadh onboarding (the data model will already support it)
- Video
- Listener accounts, comments, and likes
- Offline downloads and push notifications
- Admin dashboard and payments

## Decisions to confirm with the Ustadh this week
- The title format (for example: “Series - Lesson 05 - 2026-11-14”)
- Whether older lectures should be uploaded
- How sections are organized

## Definition of done
Done means that he can record, publish, and share a lecture from his phone without help, and a member can open the link from WhatsApp and play it.