import { BookOpen, BookText, DollarSign, Users } from "lucide-react";

const initialCourses = [
    {
      id: 1,
      name: 'English B2',
      language: 'English',
      level: 'B2',
      instructor: 'Dr. Sarah Wilson',
      duration: '12 weeks',
      schedule: 'Mon, Wed, Fri',
      time: '09:00 - 10:30',
      enrolled: 18,
      capacity: 25,
      price: 799,
      status: 'Active',
      startDate: '2024-03-15',
      type: 'Group'
    },
    {
      id: 2,
      name: 'German A1',
      language: 'German',
      level: 'A1',
      instructor: 'Prof. Hans Mueller',
      duration: '10 weeks',
      schedule: 'Tue, Thu',
      time: '14:00 - 16:00',
      enrolled: 12,
      capacity: 20,
      price: 699,
      status: 'Enrolling',
      startDate: '2024-04-01',
      type: 'Group'
    },
    {
      id: 3,
      name: 'English C1',
      language: 'English',
      level: 'C1',
      instructor: 'Dr. John Smith',
      duration: '16 weeks',
      schedule: 'Mon, Wed, Fri',
      time: '11:00 - 12:30',
      enrolled: 15,
      capacity: 15,
      price: 999,
      status: 'Full',
      startDate: '2024-03-20',
      type: 'Group'
    },
    {
      id: 4,
      name: 'German B1',
      language: 'German',
      level: 'B1',
      instructor: 'Prof. Anna Schmidt',
      duration: '12 weeks',
      schedule: 'Tue, Thu',
      time: '18:00 - 19:30',
      enrolled: 8,
      capacity: 20,
      price: 799,
      status: 'Active',
      startDate: '2024-03-10',
      type: 'Group'
    }
  ];

  const stats = [
    { 
      title: 'Active Students', 
      value: '234',
      icon:Users,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      title: 'Active Courses', 
      value: '12',
      icon:BookOpen,
      color: 'bg-green-100 text-green-600'
    },
    { 
      title: 'Publications', 
      value: '45',
      icon:BookText,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      title: 'Total Revenue', 
      value: '$45,678',
      icon: DollarSign,
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  
  const announcements = [
    { 
      title: 'Outing schedule for every department',
      time: '5 Minutes ago',
      pinned: true
    },
    { 
      title: 'Meeting HR Department',
      time: 'Yesterday, 12:30 PM',
      pinned: true
    },
    { 
      title: 'IT Department need two more talents for UX/UI Designer position',
      time: 'Yesterday, 09:15 AM',
      pinned: true
    }
  ];

  const studentData = [
    { 
      id: 1,
      name: 'John Doe',
      course: 'Advanced English',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      price: '$599',
      status: 'Active'
    },
    { 
      id: 2,
      name: 'Sarah Smith',
      course: 'Business French',
      startDate: '2024-02-01',
      endDate: '2024-07-01',
      price: '$699',
      status: 'Active'
    },
    { 
      id: 3,
      name: 'Mike Johnson',
      course: 'Beginner Spanish',
      startDate: '2024-01-10',
      endDate: '2024-06-10',
      price: '$499',
      status: 'Active'
    }
  ];

  const announcementsDetailed = [
    {
      id: 1,
      headline: "New Feature Release",
      text: "We're excited to announce our latest feature that will revolutionize how you work. This update includes improvements to the user interface and better performance.",
      image: "https://picsum.photos/400/400",
      socialLink: "https://twitter.com/example/status/1",
      socialNetwork: 'Twitter'
    },
    {
      id: 2,
      headline: "Company Milestone Achieved",
      text: "We're proud to announce that we've reached 1 million active users! Thank you to our amazing community for your continued support and trust.",
      image: "https://picsum.photos/400/400",
      socialLink: "https://twitter.com/example/status/2",
      socialNetwork: 'Twitter'
    },
  ];
export {initialCourses,studentData,announcements,stats,announcementsDetailed}