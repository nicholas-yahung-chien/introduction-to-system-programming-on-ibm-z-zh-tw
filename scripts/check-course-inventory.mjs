import { readFile } from 'node:fs/promises'

const manifest = JSON.parse(await readFile('data/course-manifest.json', 'utf8'))
const audit = JSON.parse(await readFile('data/course-inventory-audit.json', 'utf8'))
const assessment = JSON.parse(await readFile('data/assessment-inventory.json', 'utf8'))
const practiceQuestions = JSON.parse(await readFile('data/practice-questions.json', 'utf8'))

const findings = []

const manifestActivities = manifest.sections.flatMap((section) => section.activities)
const videos = manifestActivities.filter((activity) => activity.type === 'video')
const labs = manifestActivities.filter((activity) => activity.type === 'lab')
const moodleQuizzes = manifestActivities.filter((activity) => activity.type === 'quiz')
const hvpActivities = manifestActivities.filter((activity) => activity.type === 'hvp')
const resources = manifestActivities.filter((activity) => activity.type === 'resource')

function expect(label, actual, expected) {
  if (actual !== expected) findings.push(`${label}: expected ${expected}, found ${actual}`)
}

const expectedStaticPracticeQuestions = assessment.summary.staticPracticeQuestions
const expectedBadgeCapturedQuestions = assessment.summary.badgeQuizCapturedUniqueQuestions
const expectedBadgePerAttempt = assessment.summary.badgeQuizQuestionsPerAttempt

expect('manifest sections', manifest.sections.length, 5)
expect('manifest videos', videos.length, 24)
expect('manifest labs', labs.length, 6)
expect('manifest Moodle quizzes', moodleQuizzes.length, 1)
expect('manifest H5P activities', hvpActivities.length, 8)
expect('manifest resources', resources.length, 2)

expect('live activities', audit.summary?.activities ?? audit.sections.reduce((sum, section) => sum + section.activityCount, 0), 53)
expect('live videos', audit.liveCounts.video, 24)
expect('live pages', audit.liveCounts.page, 8)
expect('live Moodle quizzes', audit.liveCounts.quiz, 1)
expect('live H5P activities', audit.liveCounts.hvp, 8)

expect('static practice questions', practiceQuestions.length, expectedStaticPracticeQuestions)
expect('assessment static practice questions', assessment.summary.staticPracticeQuestions, 21)
expect('assessment static practice sources', assessment.summary.staticPracticeSources, 8)
expect('assessment badge quiz questions per attempt', expectedBadgePerAttempt, 20)
expect('assessment badge quiz captured unique questions', expectedBadgeCapturedQuestions, 0)
expect('assessment lab pages', assessment.summary.labPages, 6)

if (findings.length > 0) {
  console.error(findings.join('\n'))
  process.exit(1)
}

console.log(`Course inventory checks passed: 53 activities, 24 videos, 6 labs, ${expectedStaticPracticeQuestions} static practice questions, ${expectedBadgePerAttempt} questions per Badge Quiz attempt.`)
