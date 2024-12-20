import { useState } from "react";
import { ActionButton, CloseButton, ComplexSelect, InputContainer, InputElement } from "./Atoms";
import useValidation from "../utils/useValidation";
import { BookTypeIcon, GraduationCap } from "lucide-react";
import { addStudent, updateStudent } from "../../SupabaseServices";
import { useTranslation } from "react-i18next";

export default function AddStudentModal({
  students,
  setCurrentStudent,
  showModal,
  courses,
  statuses,
  currentStudent,
  setStudents,
  setShowModal,
}) {

  const {t} = useTranslation('adminStudentModal')
  const initialStudent = {
    ...(currentStudent?.id ? { id: currentStudent.id } : {}),
    name: currentStudent?.name || "",
    email: currentStudent?.email || "",
    phone: currentStudent?.phone || "",
    course: currentStudent?.course || "",
    enrollmentDate: currentStudent?.enrollmentDate || "",
    status: currentStudent?.status || "",
    address: currentStudent?.address || "",
    dateOfBirth: currentStudent?.dateOfBirth || "",
  };

  const [formData, setFormData] = useState(initialStudent);
  const [loading, setLoading] = useState(false); // Track loading state
  const { errors, validatePhone, validateEmpty, validateEmail, validateNumber, clearError } =
    useValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validations
    const isFormValid = [
      validateEmpty("name", formData.name),
      validateEmail("email", formData.email),
      validatePhone("phone", formData.phone),
      validateEmpty("course", formData.course),
      validateEmpty("enrollmentDate", formData.enrollmentDate),
      validateEmpty("address", formData.address),
      validateEmpty("dateOfBirth", formData.dateOfBirth),
    ].every(Boolean);

    if (isFormValid) {
      setLoading(true); // Start loading

      const student = { ...formData };
      try {
        if (formData.id) {
          await updateStudent(currentStudent.id, student);
          setStudents(
            students.map((s) => (s.id === formData.id ? formData : s))
          );
        } else {
          const newStudent = await addStudent(student);
          setStudents([...students, newStudent[0]]);
        }
        setCurrentStudent(null);
        setShowModal(false);
        setFormData(initialStudent);
      } catch (error) {
        console.error("Error adding/updating student:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) clearError(name);
  };

  if (!showModal) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
      <div className="md:p-10 p-6 relative h-[100dvh] md:max-h-[90vh] md:min-w-[50%] md:w-auto w-full md:max-w-[100vw-3rem] text-sm bg-white rounded-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
            <GraduationCap className="text-amber-500" />
            <span>{formData.id ? t("Edit") : t("Add")}</span>
          </h2>
          <CloseButton onClick={() => setShowModal(false)} />
        </div>

        <div className="space-y-4">
          <InputContainer inputName="name" label={t("Name")}>
            <InputElement
              inputName="name"
              value={formData.name}
              type={"text"}
              onChange={handleChange}
              error={errors.name}
            />
          </InputContainer>
          <InputContainer inputName="email" label={t("Email")}>
            <InputElement
              inputName="email"
              value={formData.email}
              type={"email"}
              onChange={handleChange}
              error={errors.email}
            />
          </InputContainer>
          <InputContainer inputName="phone" label={t("Phone")}>
            <InputElement
              inputName="phone"
              value={formData.phone}
              type={"tel"}
              onChange={handleChange}
              error={errors.phone}
            />
          </InputContainer>
          <InputContainer inputName="dateOfBirth" label={t("DateOfBirth")}>
            <InputElement
              inputName="dateOfBirth"
              value={formData.dateOfBirth}
              type={"date"}
              onChange={handleChange}
              error={errors.dateOfBirth}
            />
          </InputContainer>
          <InputContainer inputName="address" label={t("Address")}>
            <InputElement
              inputName="address"
              value={formData.address}
              type={"text"}
              onChange={handleChange}
              error={errors.address}
            />
          </InputContainer>
          <InputContainer inputName="course" label={t("Course")}>
            <ComplexSelect
              type={"select"}
              options={courses}
              onChange={handleChange}
              inputName={"course"}
              value={formData.course}
              placeholder={t("CoursePlaceholder")}
              error={errors.course}
            />
          </InputContainer>
          <InputContainer inputName="enrollmentDate" label={t("EnrollmentDate")}>
            <InputElement
              inputName="enrollmentDate"
              value={formData.enrollmentDate}
              type={"date"}
              onChange={handleChange}
              error={errors.enrollmentDate}
            />
          </InputContainer>
          <InputContainer label={t("Status")} inputName="status">
            <InputElement
              inputName="status"
              type={"select"}
              options={statuses}
              onChange={handleChange}
              value={formData.status}
              placeholder={t("StatusPlaceholder")}
              error={errors.status}
            />
          </InputContainer>
          <div className="flex justify-end gap-3 mt-6 text-sm">
            <ActionButton
              onClick={() => setShowModal(false)}
              label={t("Cancel")}
              secondary={true}
            />
            <ActionButton
              onClick={handleSubmit}
              label={formData.id ? t("Edit") : t("Add")}
              isLoading={loading} // Pass loading state
            />
          </div>
        </div>
      </div>
    </div>
  );
}
