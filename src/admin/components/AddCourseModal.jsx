import React, { useState } from 'react';
import { Users, CircleX, Globe2, School, CalendarDays, DollarSignIcon, User, Clock3 } from 'lucide-react';
import { ActionButton, CloseButton, InputContainer, InputElement } from './Atoms';
import useValidation from '../utils/useValidation';
import { addCourse, updateCourse } from '../../SupabaseServices';

const AddCourseModal = ({ currentCourse, courses, setCourses, setCurrrentCourse, isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false); // Loading state

  const initialFormState = {
    ...(currentCourse?.id ? { id: currentCourse.id } : {}),
    name: currentCourse?.name || '',
    language: currentCourse?.language || '',
    level: currentCourse?.level || '',
    instructor: currentCourse?.instructor || '',
    location: currentCourse?.location || '',
    startTime: currentCourse?.startTime || '',
    endTime: currentCourse?.endTime || '',
    capacity: currentCourse?.capacity || 0,
    price: currentCourse?.price || 0,
    status: currentCourse?.status || '',
    enrolled: currentCourse?.enrolled || 0,
    startDate: currentCourse?.startDate || '',
    endDate: currentCourse?.endDate || '',
  };
  const statuses = ['Active', 'Full', 'Enrolling'];
  const { errors, validateEmpty, validateNumber, clearError } = useValidation();
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validations
    const isFormValid = [
      validateEmpty('name', formData.name),
      validateEmpty('language', formData.language),
      validateEmpty('level', formData.level),
      validateEmpty('instructor', formData.instructor),
      validateEmpty('location', formData.location),
      validateEmpty('status', formData.status),
      validateNumber('enrolled', formData.enrolled),
      validateEmpty('startTime', formData.startTime),
      validateEmpty('endTime', formData.endTime),
      validateNumber('capacity', formData.capacity),
      validateNumber('price', formData.price),
      validateEmpty('startDate', formData.startDate),
      validateEmpty('endDate', formData.endDate),
    ].every(Boolean);

    if (isFormValid) {
      setLoading(true); // Set loading to true
      const course = { ...formData };
      try {
        if (formData.id) {
          await updateCourse(currentCourse.id, course);
          setCourses(courses.map((c) => (c.id === formData.id ? formData : c)));
        } else {
          const newCourse = await addCourse(course);
          setCourses([...courses, newCourse[0]]);
        }
        setCurrrentCourse(null);
        setIsOpen(false);
        setFormData(initialFormState);
      } catch (error) {
        console.error('Error updating/adding course:', error);
      } finally {
        setLoading(false); // Reset loading state
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

  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
      <div className="md:p-10 relative p-6 h-[100dvh] md:max-h-[90vh] md:min-w-[50%] md:w-auto w-full md:max-w-[100vw-3rem] bg-white rounded-lg overflow-y-auto">
        <CloseButton onClick={() => setIsOpen(false)} />

        <div>
          <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
            <Globe2 className="text-amber-500" />
            <span>{!formData.id ? 'Add New Language Course' : 'Edit Course'}</span>
          </h2>

          <form onSubmit={handleSubmit} className="text-sm text-gray-800 space-y-4">
            <InputContainer icon={School} label={"Course Name"} inputName={"name"}>
              <InputElement
                type={"text"}
                placeholder="Course name"
                inputName={"name"}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </InputContainer>
            <div className="grid grid-cols-2 gap-4">
                <InputContainer icon={Globe2} inputName={"language"} label={"Language"}>
                    <InputElement 
                        type={"select"} 
                        options={["English","German"]} 
                        onChange={handleChange}
                        inputName={"language"}
                        value={formData.language}
                        placeholder={"Select Language"}
                        error={errors.language}
                    />
                </InputContainer>
                <InputContainer icon={Users} inputName={"level"} label={"Level"}>
                    <InputElement 
                        type={"select"} 
                        options={["A1","A2","B1","B2","C1","C2"]} 
                        onChange={handleChange}
                        inputName={"level"}
                        value={formData.level}
                        placeholder={"Select Level"}
                        error={errors.level}
                    />
                </InputContainer>
            </div>
            <InputContainer icon={User} label={"Instructor"} inputName={"instructor"}>
                <InputElement type={"text"}  placeholder="Instructor" inputName={"instructor"} value={formData.instructor} onChange={handleChange} error={errors.instructor}/>
            </InputContainer>
            <div className="grid grid-cols-2 gap-4">
                <InputContainer inputName={"price"} icon={DollarSignIcon} label={"Price"}>
                    <InputElement
                        placeholder={"Price"}
                        value={formData.price}
                        onChange={handleChange}
                        inputName={"price"}
                        type={"number"}
                        error={errors.price}
                    />
                </InputContainer>
                <InputContainer icon={CalendarDays} inputName={"location"} label={"Location"}>
                    <InputElement 
                        type={"select"} 
                        options={["Douala","Yaoundé"]} 
                        onChange={handleChange}
                        inputName={"location"}
                        value={formData.location}
                        placeholder={"Select Location"}
                        error={errors.location}
                    />
                </InputContainer>
            </div>   
            <div className="grid grid-cols-2 gap-4"> 
                <InputContainer icon={Clock3} inputName={"startTime"} label={"Start Time"}>
                  <InputElement
                    type={"time"}
                    onChange={handleChange}
                    inputName={"startTime"}
                    value={formData.startTime}
                    error={errors.startTime}
                  />
                </InputContainer>
                <InputContainer icon={Clock3} inputName={"endTime"} label={"End Time"}>
                  <InputElement
                    type={"time"}
                    onChange={handleChange}
                    inputName={"endTime"}
                    value={formData.endTime}
                    error={errors.endTime}
                  />
                </InputContainer> 
            </div>    
            <div className="grid grid-cols-2 gap-4">
                <InputContainer inputName={"startDate"} icon={CalendarDays} label={"Start Date"}>
                    <InputElement
                        placeholder={"Start Date"}
                        value={formData.startDate}
                        onChange={handleChange}
                        inputName={"startDate"}
                        type={"date"}
                        error={errors.startDate}
                    />
                </InputContainer>
                <InputContainer inputName={"endDate"} icon={CalendarDays} label={"End Date"}>
                    <InputElement
                        placeholder={"End Date"}
                        value={formData.endDate}
                        onChange={handleChange}
                        inputName={"endDate"}
                        type={"date"}
                        error={errors.endDate}
                    />
                </InputContainer>
            </div>
            <div className='grid gap-4 grid-cols-2'>
              <InputContainer inputName={"capacity"} icon={User} label={"Capacity"}>
                    <InputElement
                        placeholder={"Capacity"}
                        value={formData.capacity}
                        onChange={handleChange}
                        inputName={"capacity"}
                        type={"number"}
                        error={errors.capacity}
                    />
                </InputContainer>
              <InputContainer inputName={"enrolled"} icon={Users} label={"Enrolled"}>
                <InputElement
                    placeholder={"Enrolled"}
                    value={formData.enrolled}
                    onChange={handleChange}
                    inputName={"enrolled"}
                    type={"number"}
                    error={errors.enrolled}
                />
              </InputContainer>
            </div>
            <InputContainer icon={Clock3} inputName={"status"} label={"Status"}>
              <InputElement 
                  type={"select"} 
                  options={statuses} 
                  onChange={handleChange}
                  inputName={"status"}
                  value={formData.status}
                  placeholder={"Select Status"}
                  error={errors.time}
              />
            </InputContainer>  
            <div className="flex gap-3 flex-wrap items-center justify-end pt-4">
              <ActionButton
                onClick={() => setIsOpen(false)}
                label="Cancel"
                secondary={true}
                isLoading={false} // Cancel button never has a loading state
              />
              <ActionButton
                label={formData.id ? 'Edit Course' : 'Add Course'}
                isLoading={loading} // Pass loading state here
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;
