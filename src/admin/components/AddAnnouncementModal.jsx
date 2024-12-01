import React, { useState } from 'react';
import { Users, CircleX, Globe2, School, CalendarDays, DollarSignIcon, User, Clock3 } from 'lucide-react';
import { CloseButton, FileInput, InputContainer, InputElement, TextArea, ActionButton } from './Atoms'; // Ensure ActionButton is imported
import useValidation from '../utils/useValidation';
import { addAnnouncement, updateAnnouncement, uploadImage } from '../../SupabaseServices';
import { useTranslation } from 'react-i18next';

const AddAnnouncementModal = ({ currentAnnouncement, announcements, setAnnouncements, setCurrentAnnouncement, isOpen, setIsOpen }) => {
  const {t} = useTranslation('adminNewsModal')
  const initialFormState = {
    ...(currentAnnouncement?.id ? { id: currentAnnouncement.id } : {}),
    headline: currentAnnouncement?.headline || '',
    text: currentAnnouncement?.text || '',
    image: currentAnnouncement?.image || '',
    socialLink: currentAnnouncement?.socialLink || '',
    socialNetwork: currentAnnouncement?.socialNetwork || '',
    pinned: currentAnnouncement?.pinned || false,
    author: currentAnnouncement?.author || 'admin',
  };
  const { errors, validateEmpty, clearError } = useValidation();
  const [formData, setFormData] = useState(initialFormState);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validations
    const isFormValid = [
      validateEmpty('headline', formData.headline),
      validateEmpty('text', formData.text),
      validateEmpty('socialLink', formData.socialLink),
      validateEmpty('socialNetwork', formData.socialNetwork),
    ].every(Boolean);

    if (!isFormValid) return;

    try {
      setLoading(true); // Set loading to true
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
    } finally {
      setLoading(false); // Set loading to false
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

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-70 fixed z-20 flex items-center justify-center">
      <div className="md:p-10 relative p-6 h-[100dvh] md:max-h-[90vh] md:min-w-[50%] md:w-auto w-full md:max-w-[100vw-3rem] bg-white rounded-lg overflow-y-auto">
        <CloseButton onClick={() => setIsOpen(false)} />

        <div>
          <h2 className="text-lg text-gray-800 flex gap-2 items-center my-6">
            <Globe2 className="text-amber-500" />
            <span>{!formData.id ? t('Add') : t('Edit')}</span>
          </h2>

          <form onSubmit={handleSubmit} className="text-sm text-gray-800 space-y-4">
            <InputContainer label={t('Title')} inputName={'headline'}>
              <InputElement
                type={'text'}
                placeholder={t("TitlePlaceholder")}
                inputName={'headline'}
                value={formData.headline}
                onChange={handleChange}
                error={errors.headline}
              />
            </InputContainer>
            <InputContainer label={t('Description')} inputName={'text'}>
              <TextArea
                placeholder={t("DescriptionPlaceholder")}
                inputName={'text'}
                value={formData.text}
                onChange={handleChange}
                error={errors.text}
                maxlength={280}
                resizable={false}
                cols={5}
                rows={5}
              />
            </InputContainer>
            <InputContainer inputName={'socialNetwork'} label={t('SocialNetwork')}>
              <InputElement
                type={'select'}
                options={['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube', 'Github', 'Other']}
                onChange={handleChange}
                inputName={'socialNetwork'}
                value={formData.socialNetwork}
                placeholder={t('SocialNetworkPlaceholder')}
                error={errors.socialNetwork}
              />
            </InputContainer>
            <InputContainer inputName={'socialLink'} label={t('SocialLink')}>
              <InputElement
                placeholder={t('SocialLinkPlaceholder')}
                value={formData.socialLink}
                onChange={handleChange}
                inputName={'socialLink'}
                type={'url'}
                error={errors.socialLink}
              />
            </InputContainer>
            <FileInput
              inputName={'image'}
              label={t('UploadImage')}
              onChange={handleImageChange}
              value={imageFile?.name}
              error={errors.image}
            />
            <div className="flex gap-3 flex-wrap items-center justify-end pt-4">
              <ActionButton
                onClick={() => setIsOpen(false)}
                label={t('Cancel')}
                secondary={true}
                isLoading={false}
              />
              <ActionButton
                onClick={handleSubmit}
                label={formData.id ? t('Edit') : t('AddButton')}
                isLoading={loading} // Pass loading state here
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncementModal;
