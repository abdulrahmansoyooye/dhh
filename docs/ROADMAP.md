Week 1 (Nov 14 to 20): foundations and the recording test

1. **Day 1:** Send the Ustadh the message and get his phone type. Create three repos (api, app, web). Write a one-page list of what the first version includes and what it doesn’t.
2. **Day 2:** Scaffold NestJS with Postgres in Docker, reusing your VTU env validation. Add a health endpoint.
3. **Day 3:** Scaffold the Expo app in TypeScript. Build a bare screen with record, stop and play, and run it on a real phone.
4. **Day 4:** Make the recorder save to a file and show a timer. Record 10 minutes and play it back.
5. **Day 5:** Make an Expo development build (background audio doesn’t work in Expo Go) and configure background recording. Test 30 minutes with the screen locked.
6. **Day 6:** Run the 60-minute test with the screen locked and a phone call coming in. Write down pass or fail.
7. **Day 7:** Review the week. If the test passed, continue. If not, we fix it before anything else.

## Week 2 (Nov 21 to 27): Backend Core

1. **Day 8:** TypeORM and migrations. Entities: Teacher, Section (with optional parent), Lecture.
2. **Day 9:** Login with hashed passwords and JWT. Seed the first Ustadh account.
3. **Day 10:** Section endpoints, including nested sections, with validation.
4. **Day 11:** Lecture endpoints: create the record, list, get.
5. **Day 12:** Create the storage bucket (Cloudflare R2) and a presigned upload endpoint. Test it with a real file.
6. **Day 13:** Multipart upload flow (initiate, part URLs, complete) for large files.
7. **Day 14:** Add Swagger, write tests for the core flows, and deploy the API with a managed Postgres.

## Week 3 (Nov 28 to Dec 4): The App

1. **Day 15:** Login screen with secure token storage.
2. **Day 16:** Section picker plus lesson number and date fields.
3. **Day 17:** Proper record screen: pause, resume, timer, keep screen awake.
4. **Day 18:** Save recordings locally with their metadata in a queue, so nothing is lost if upload fails.
5. **Day 19:** Upload to storage with a progress bar.
6. **Day 20:** Retry and resume after failures, and handle being offline.
7. **Day 21:** Title built from the fields, confirm screen, publish. Test end to end: record, upload, published.

## Week 4 (Dec 5 to 11): The Website

1. **Day 22:** Scaffold Next.js and Tailwind. Generate a typed API client from the Swagger spec.
2. **Day 23:** Public backend endpoints: teacher by slug, section tree, published lectures only, with pagination.
3. **Day 24:** Vibecode the teacher home page and section list. Give the AI your API spec so it doesn’t invent endpoints.
4. **Day 25:** Section page with lectures sorted by lesson number.
5. **Day 26:** Lecture page with audio player.
6. **Day 27:** Link previews and WhatsApp share button. Test by pasting a link into WhatsApp.
7. **Day 28:** Search, plus your own review of the vibecoded code for security.

## Week 5 (Dec 12 to 18): Polish and First Real Install

1. **Day 29:** Share button in the app after publishing.
2. **Day 30:** App list of his lectures with edit title and unpublish.
3. **Day 31:** Make audio playback work well on slow data (range requests, caching).
4. **Day 32:** Deploy the website on a real domain with HTTPS.
5. **Day 33:** Error tracking, logging, rate limiting.
6. **Day 34:** Build the installable app and put it on the Ustadh’s phone.
7. **Day 35:** His first real use. Watch what confuses him and write it down.

## Week 6 (Dec 19 to 25): Real Use and Fixes

1. **Day 36:** Fix the top issues from his first use.
2. **Day 37:** Upload-a-file option for his older lectures.
3. **Day 38:** Automated database backups, and test a restore.
4. **Days 39–41:** He records daily. Fix the top problem each day. Repeat the 60-minute test on the final build.
5. **Day 42:** Feature freeze.

## Week 7 (Dec 26 to 31): Launch Prep

1. **Day 43:** Uptime monitoring.
2. **Day 44:** Backfill older lectures.
3. **Day 45:** Draft the launch announcement for the group.
4. **Day 46:** Full dry run, as a member would use it.
5. **Day 47:** Fix last bugs only.
6. **Day 48 (Dec 31):** Rest. Launch Jan 1.