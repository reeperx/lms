export const isTeacher = (userId?: string | null) => {
  // Assuming TEACHER_IDS is a comma-separated string of IDs
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS 
    ? process.env.NEXT_PUBLIC_TEACHER_IDS.split(',') 
    : [];

  return userId ? teacherIds.includes(userId) : false;
}
