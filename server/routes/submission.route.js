const express = require("express");
const {
  AddSubmission,
  updateSubmission,
  gradeSubmission,
  deleteSubmission,
  getSubmissionByStudentId,
  getAllSubmission,
  testgetSubmssision,
  uploadSubmission,
  deleteSubmissionFile,
  getAllSubmissions3,
  getAllSubmissions4,
} = require("../controller/submission");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();
router.post(
  "/uploadSubmission",
  upload.single("submission_file"),
  uploadSubmission
); /** upload zip file for sumbission */

router.post(
  "/submitChapter/:chapterId",
  AddSubmission
); /** Add And Update  Chapter */

router.put("/updateSubmission/:submissionId", updateSubmission);

router.put(
  "/gradeSubmission/:submissionId",
  gradeSubmission
); /** Grade Submission */

router.delete("/deleteSubmission/:submissionId", deleteSubmission);

router.get("/getSubmission", getSubmissionByStudentId);

router.get("/getAllSubmission", getAllSubmission);

router.get("/getAllSubmission2", testgetSubmssision);

router.get("/getAllSubmission3/:studentId", getAllSubmissions3);

router.put(
  "/deletezipsubmission",
  deleteSubmissionFile
); /** Delete zip file for submission not currently used */

router.get(
  "/getAllSubmission4/:studentId",
  getAllSubmissions4
); /** using to fetching all the submission for that student */

module.exports = router;
