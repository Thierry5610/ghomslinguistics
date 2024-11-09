import { createClient } from '@supabase/supabase-js';
import { BookOpen, BookText, DollarSign, Users } from "lucide-react";

// Initialize the Supabase client
const supabaseUrl = 'https://egicbbdzvszonimqatjc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnaWNiYmR6dnN6b25pbXFhdGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNjY1NjIsImV4cCI6MjA0Njc0MjU2Mn0.LCYOyc4Y78iGD_r46AYzAM6fSB5p7GRSQBjMtBJmkvw';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- Courses CRUD Operations ---

// Fetch all courses
export const getCourses = async () => {
    const { data, error } = await supabase.from('Courses').select('*');
    if (error) console.error('Error fetching courses:', error);
    return data;
};

// Add a new course
export const addCourse = async (course) => {
    const { data, error } = await supabase.from('Courses').insert([course]).select();
    if (error) console.error('Error adding course:', error);
    return data;
};

// Update an existing course
export const updateCourse = async (courseId, courseData) => {
    const { data, error } = await supabase.from('Courses').update(courseData).eq('id', courseId);
    if (error) console.error('Error updating course:', error);
    return data;
};

// Delete a course
export const deleteCourse = async (courseId) => {
    const { data, error } = await supabase.from('Courses').delete().eq('id', courseId);
    if (error) console.error('Error deleting course:', error);
    return data;
};

// --- Students CRUD Operations ---

// Fetch all students
export const getStudents = async () => {
    const { data, error } = await supabase.from('Students').select('*');
    if (error) console.error('Error fetching students:', error);
    return data;
};

// Add a new student
export const addStudent = async (student) => {
    const { data, error } = await supabase.from('Students').insert([student]).select();
    if (error) console.error('Error adding student:', error);
    return data;
};

// Update an existing student
export const updateStudent = async (studentId, studentData) => {
    const { data, error } = await supabase.from('Students').update(studentData).eq('id', studentId);
    if (error) console.error('Error updating student:', error);
    return data;
};

// Delete a student
export const deleteStudent = async (studentId) => {
    const { data, error } = await supabase.from('Students').delete().eq('id', studentId);
    if (error) console.error('Error deleting student:', error);
    return data;
};

// --- Announcements CRUD Operations ---

// Fetch all announcements
export const getAnnouncements = async () => {
    const { data, error } = await supabase.from('Announcements').select('*');
    if (error) console.error('Error fetching announcements:', error);
    return data;
};

// Add a new announcement
export const addAnnouncement = async (announcement) => {
    const { data, error } = await supabase.from('Announcements').insert([announcement]).select();
    if (error) console.error('Error adding announcement:', error);
    return data;
};

// Update an existing announcement
export const updateAnnouncement = async (announcementId, announcementData) => {
    const { data, error } = await supabase.from('Announcements').update(announcementData).eq('id', announcementId);
    if (error) console.error('Error updating announcement:', error);
    return data;
};

// Delete an announcement
export const deleteAnnouncement = async (announcementId) => {
    const { data, error } = await supabase.from('Announcements').delete().eq('id', announcementId);
    if (error) console.error('Error deleting announcement:', error);
    return data;
};


export const getCourseNames = async () => {
    const { data, error } = await supabase
      .from('Courses')
      .select('id, name');
  
    if (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  
    return data.map(course => ({
      id: course.id,
      name: course.name
    }));
  };


// --- Statistics Calculation ---

export const getStats = async () => {
    try {
        // Fetch data from each table
        const { data: students, error: studentError } = await supabase.from('Students').select('*');
        const { data: courses, error: courseError } = await supabase.from('Courses').select('*');
        const { data: announcements, error: announcementError } = await supabase.from('Announcements').select('*');

        if (studentError) throw studentError;
        if (courseError) throw courseError;
        if (announcementError) throw announcementError;

        // Calculate stats
        const activeStudents = students ? students.length : 0;
        const activeCourses = courses ? courses.filter(course => course.status === 'Active').length : 0;
        const totalPublications = announcements ? announcements.length : 0;
        const totalRevenue = courses
            ? courses.reduce((acc, course) => acc + course.price * (course.enrolled || 0), 0)
            : 0;

        return [
            { 
                title: 'Active Students', 
                value: activeStudents,
                icon: Users,
                color: 'bg-blue-100 text-blue-600'
            },
            { 
                title: 'Active Courses', 
                value: activeCourses,
                icon: BookOpen,
                color: 'bg-green-100 text-green-600'
            },
            { 
                title: 'Publications', 
                value: totalPublications,
                icon: BookText,
                color: 'bg-purple-100 text-purple-600'
            },
            { 
                title: 'Total Revenue', 
                value: totalRevenue,
                icon: DollarSign,
                color: 'bg-amber-100 text-amber-600'
            }
        ];
    } catch (error) {
        console.error('Error calculating stats:', error);
        return [];
    }
};
