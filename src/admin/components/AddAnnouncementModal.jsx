import React, { useState } from 'react';
import { Users, CircleX, Globe2, School, CalendarDays, DollarSignIcon, User, Clock3 } from 'lucide-react';
import { CloseButton, FileInput, InputContainer, InputElement, TextArea } from './Atoms';
import useValidation from '../utils/useValidation';
import { addAnnouncement, updateAnnouncement, uploadImage } from '../../SupabaseServices';

const AddAnnouncementModal = ({ currentAnnouncement, announcements, setAnnouncements, setCurrentAnnouncement, isOpen, setIsOpen }) => {
  const initialFormState = {
    ...(currentAnnouncement?.id ? { id: currentAnnouncement.id } : {}),
    headline: currentAnnouncement?.headline || '',
    text: currentAnnouncement?.text || '',
    image: currentAnnouncement?.image || '',
    socialLink: currentAnnouncement?.socialLink || '',
    socialNetwork: currentAnnouncement?.socialNetwork || '',
    pinned: currentAnnouncement?.pinned || false,
    author: currentAnnouncement?.author || 'admin'
  };
  const { errors, validateEmpty, clearError,validateImage } = useValidation();
  const [formData, setFormData] = useState(initialFormState);
  const [imageFile,setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Run validations
    const isFormValid = [
      validateEmpty('headline', formData.headline),
      validateEmpty('text', formData.text),
      //validateImage('image', imageFile),
      validateEmpty('socialLink', formData.socialLink),
      validateEmpty('socialNetwork', formData.socialNetwork),
    ].every(Boolean);
  
    if (!isFormValid) return;
  
    try {
      let imageUrl = formData.image; // Retain current image URL if no new image is uploaded
  
      // If a new image is uploaded, handle the upload
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      
      const announcement = { ...formData, image: imageUrl };
  
      if (formData.id) {
        // Update existing announcement
        await updateAnnouncement(formData.id, announcement);
        setAnnouncements(announcements.map((a) => (a.id === formData.id ? announcement : a)));
      } else {
        // Add new announcement
        const [newAnnouncement] = await addAnnouncement(announcement);
        setAnnouncements([...announcements, newAnnouncement]);
      }
  
      // Reset form and close modal
      setCurrentAnnouncement(null);
      setIsOpen(false);
      setFormData(initialFormState);
      setImageFile(null);
    } catch (error) {
      console.error('Error submitting announcement:', error.message);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) clearError(name);
  };

  const handleImageChange = (e) => {
      setImageFile(e.target.files[0])
  }

  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
      <div className="md:p-10 relative p-6 h-[100dvh] md:max-h-[90vh] md:min-w-[50%] md:w-auto w-full md:max-w-[100vw-3rem] bg-white rounded-lg overflow-y-auto">
        <CloseButton onClick={() => setIsOpen(false)} />

        <div>
          <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
            <Globe2 className="text-amber-500" />
            <span>{!formData.id ? 'Add New Announcement' : 'Edit Announcement'}</span>
          </h2>

          <form onSubmit={handleSubmit} className="text-sm text-gray-800 space-y-4">
            <InputContainer label={"Title"} inputName={"headline"}>
              <InputElement
                type={"text"}
                placeholder="Title"
                inputName={"headline"}
                value={formData.headline}
                onChange={handleChange}
                error={errors.headline}
              />
            </InputContainer>
            <InputContainer label={"Description"} inputName={"text"}>
              <TextArea
                placeholder="Description"
                inputName={"text"}
                value={formData.text}
                onChange={handleChange}
                error={errors.text}
                maxlength={280}
                resizable={false}
                cols={5}
                rows={5}
              />
            </InputContainer>
            <InputContainer inputName={"socialNetwork"} label={"Social Network"}>
              <InputElement
                type={"select"}
                options={["Facebook", "Twitter", "Instagram", "Linkedin", "Youtube", "Github", "Other"]}
                onChange={handleChange}
                inputName={"socialNetwork"}
                value={formData.socialNetwork}
                placeholder={"Social Network"}
                error={errors.socialNetwork}
              />
            </InputContainer>
            <InputContainer inputName={"socialLink"} label={"Social link"}>
                <InputElement
                  placeholder={"Social link"}
                  value={formData.socialLink}
                  onChange={handleChange}
                  inputName={"socialLink"}
                  type={"url"}
                  error={errors.socialLink}
                />
            </InputContainer>
            <FileInput
              inputName={"image"}
              label={"Upload Image"}
              onChange={handleImageChange}
              value={imageFile?.name}
              error={errors.image}
            />
            <div className="flex gap-3 flex-wrap items-center justify-end pt-4">
              <button type="button" onClick={() => setIsOpen(false)} className="p-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button type="submit" className="p-2 bg-amber-500 border border-amber-500 text-white rounded-md hover:bg-amber-600">
                {formData.id ? 'Edit' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncementModal;
