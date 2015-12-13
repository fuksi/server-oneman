/* Every preformatted query has an optional %s in the end if needed */
module.exports = {
	simple: {
		all: {
			student:'SELECT * FROM students %s;',
			teacher: 'SELECT * FROM teachers %s;',	
			course: 'SELECT * FROM courses %s;',
			fullListTeachersAndCourses: 'SELECT c.course_id, c.name, t.teacher_id, t.first_name, t.last_name FROM courses c INNER JOIN course_teacher ct ON c.course_id = ct.course_id INNER JOIN teachers t ON ct.teacher_id = t.teacher_id %s;'
		},
		single: {
			student:'SELECT * FROM students WHERE student_id = %i %s;',
			teacher: 'SELECT * FROM teachers WHERE teacher_id = %i %s;',
			course: 'SELECT * FROM courses WHERE course_id = %i %s;',
			courseTotalAttendance: 'SELECT count(date) FROM attendance WHERE course_id = %i %s',
			courseTotalOccurence: 'SELECT count(*) FROM course_schedule WHERE course_id = %i %s;',
			courseTotalParticipant: 'SELECT count(*) FROM enrollment WHERE course_id = %i %s;',
			courseParticipantList: 'SELECT student_id FROM enrollment e WHERE course_id = %i %s;'
		},	
	},
	adhoc: {
		withCondition: {
			attendanceSingleStudent: 'SELECT c.course_id, c.name, count(a.date) as count FROM attendance a INNER JOIN courses c ON a.course_id = c.course_id INNER JOIN students s ON a.student_id = s.student_id AND a.student_id = %i GROUP BY c.name %s;',
			multipleCourseTotalOccurent: 'SELECT course_id, count(occurence_date) as count FROM course_schedule WHERE %s GROUP BY course_id %s;',
			courseResultSingleStudent: 'SELECT c.course_id, c.name, e.grade FROM enrollment e INNER JOIN courses c ON e.course_id = c.course_id AND e.student_id = %i %s;',
			singleCourseAttendanceAllStudents: 'SELECT s.student_id, s.first_name, s.last_name, count(a.date) FROM attendance a INNER JOIN students s ON s.student_id = a.student_id WHERE a.course_id = %i GROUP BY s.student_id %s;',
			singleCourseGradeAllStudents: 'SELECT s.student_id, s.first_name, s.last_name, e.grade FROM enrollment e INNER JOIN students s ON s.student_id = e.student_id WHERE e.course_id = %i GROUP BY s.student_id %s;',
			numberOfCoursePerStudentLimited: 'SELECT s.student_id, s.first_name, s.last_name, count(e.course_id) as count FROM enrollment e INNER JOIN students s ON s.student_id = e.student_id WHERE %s GROUP BY e.student_id %s;',
		},
		noCondition: {
			numberOfCoursePerStudent: 'SELECT s.student_id, s.first_name, s.last_name, count(e.course_id) FROM enrollment e INNER JOIN students s ON s.student_id = e.student_id GROUP BY e.student_id %s;',
		}
	},
};