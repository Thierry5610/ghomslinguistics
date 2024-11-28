import { Check, CircleX, Facebook, Github, Globe2, Info, Instagram, Linkedin, LucideUploadCloud, Search, TriangleAlert, Twitter, Upload, UploadCloud, UploadCloudIcon, X, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Reusable ActionButton Component
const ActionButton = ({ link,label, icon: Icon, onClick, className = '' }) => (
  <>
    {!link?(<button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 ${className}`}
    >
      {Icon && <Icon size={16} />}
      <span className="text-sm">{label}</span>
    </button>):(
      <button onClick={onClick} className={`text-amber-500 text-xs ${className}`}>{label}</button>
    )}
  </>
);

const CloseButton = ({onClick}) => (
  <button onClick={onClick} className="absolute right-3 top-3 text-lg text-gray-700 hover:text-red-500">
    <CircleX />
  </button>
)
const SectionHeading = ({text}) => (
  <h2 className="text-base font-medium text-gray-900">{text}</h2>
)

const PageHeading =({text}) => (
  <h1 className="text-xl font-semi-bold text-gray-900">{text}</h1>
)

const SearchBar = ({placeholder,value,onChange}) => (
  <div className="relative flex-1">
    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 text-gray-800 py-2 border border-gray-200 outline-none rounded-lg text-sm"
    />
</div>
)

{/*Table parts*/}
const TableHead = ({entries}) => (
  <thead className="bg-stone-200">
    <tr>
      {entries.map((entry,index)=>{
        return(
          <th key={index} className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">{entry}</th>
        )
      })}
    </tr>
  </thead>
)
const TableBody = ({children}) => (
  <tbody className="divide-y text-sm text-nowrap divide-stone-200">
    {children}
  </tbody>
)
const TableRow = ({children}) => (
  <tr className="hover:bg-stone-50">
    {children}
  </tr>
)
const TableData = ({children}) => (
  <td className="px-6 py-4 text-gray-700 text-sm">
    {children}
  </td>
)

const StatusPill = ({status}) => {
   // Status badge styles
   const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Enrolling':
        return 'bg-blue-100 text-blue-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      case 'Inactive': 
        return 'bg-gray-100 text-gray-800';
      case 'On Leave': 
        return 'bg-yellow-100 text-yellow-800';
      case 'Graduated': 
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return(
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(status)}`}>
      {status}
    </span>
  )
}

const InputContainer = ({children,inputName,icon:Icon,label}) => {
    return(
      <div className="space-y-2">
      <div className="flex gap-1 items-center font-normal">
        {Icon&&<Icon className="text-gray-600"/>}
        <label htmlFor={inputName}>{label}</label>
      </div>
      {children}
    </div>
    )
}
const ComplexSelect = ({inputName,value,placeholder,onChange,error,options}) => {
  const borderStyle = error? 'border-red-500': 'border-gray-500';
  return (<div className='flex flex-col gap-1 items-start'>
    <select
      name={inputName}
      value={value}
      onChange={onChange}
      className={"p-2 border outline-none w-full rounded-md "+borderStyle}
    >
      <option value="">{placeholder}</option>
      {options.map((option,index)=>(<option key={index} value={option.id}>{option.name}</option>))}
    </select>
    {<span className='text-xs text-red-500'>{error}</span>}
  </div>)
}
const InputElement = ({type,inputName,value,placeholder,onChange,error,options}) => {
  const borderStyle = error? 'border-red-500': 'border-gray-500';
  switch(type){
    case 'text': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
          type="text"
          name={inputName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
          />
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'email': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
          type="email"
          name={inputName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
          />
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
      case 'password': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
          type="password"
          name={inputName}
          value={value}
        
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
          />
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'number': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
          type="number"
          name={inputName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
          />
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'tel': 
    return(
      <div className='flex flex-col gap-1 items-start'>
        <input
        type="tel"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
        />
        {<span className='text-xs text-red-500'>{error}</span>}
      </div>
    );
    case 'url': 
    return(
      <div className='flex flex-col gap-1 items-start'>
        <input
        type="url"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
        />
        {<span className='text-xs text-red-500'>{error}</span>}
      </div>
    );
    case 'select': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <select
            name={inputName}
            value={value}
            onChange={onChange}
            className={"p-2 border outline-none w-full rounded-md "+borderStyle}
          >
            <option value="">{placeholder}</option>
            {options.map((option,index)=>(<option key={index} value={option}>{option}</option>))}
          </select>
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'date': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
            type="date"
            name={inputName}
            value={value}
            onChange={onChange}
            // min={new Date().toISOString().split('T')[0]}
            className={"p-2 placeholder:text-gray-500 border outline-none w-full rounded-md "+borderStyle}
          />    
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'time': 
      return(
        <div className='flex flex-col gap-1 items-start'>
          <input
            type="time"
            name={inputName}
            value={value}
            onChange={onChange}
            className={`p-2 placeholder:text-gray-500 border outline-none w-full rounded-md ${borderStyle}`}
          />
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    default:
      return(
        <>
          {

          }
        </>
      )
  }
}
const TextArea = ({maxlength,inputName,value,placeholder,onChange,error,rows,cols,resizable})=> {
  const borderStyle = error? 'border-red-500': 'border-gray-500';
  return(
    <div className='flex flex-col gap-1 items-start'>
      <textarea
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxlength}
        cols={cols}
        style={{resize:resizable?'':'none'}}
        rows={rows}
        className={`p-4 placeholder:text-gray-500 border outline-none w-full ${borderStyle}`}
      >{placeholder}</textarea>
      {<span className='text-xs text-red-500'>{error}</span>}
    </div>
  )
}
export const FileInput = ({error,inputName,value,onChange,label})=> {
  return(
    <div className='flex flex-col gap-1 items-start'>
      <label 
        htmlFor={inputName}
        className='p-2 bg-gray-700 text-white text-xs rounded-md items-center cursor-pointer flex gap-1'
      >
        <span><Upload/></span>
        <span>{label}</span>
      </label>
      <input
        type="file"
        name={inputName}
        id={inputName}
        onChange={onChange}
        className='hidden'
      />
      {error?<span className='text-xs text-red-500'>{error}</span>:<span className='text-xs text-gray-700'>{value}</span>}
  </div>
  )
}
const DisplaySocial = ({ social, size = 16 }) => {
  const baseStyle = "transition-colors duration-200";
  
  switch(social) {
    case 'Facebook':
      return <Facebook size={size} className={`${baseStyle} text-gray-600 hover:text-[#1877F2]`} />
    case 'Twitter':
      return <Twitter size={size} className={`${baseStyle} text-gray-600 hover:text-[#1DA1F2]`} />
    case 'Instagram':
      return <Instagram size={size} className={`${baseStyle} text-gray-600 hover:text-[#E4405F]`} />
    case 'Linkedin':
      return <Linkedin size={size} className={`${baseStyle} text-gray-600 hover:text-[#0A66C2]`} />
    case 'Youtube':
      return <Youtube size={size} className={`${baseStyle} text-gray-600 hover:text-[#FF0000]`} />
    case 'Github':
      return <Github size={size} className={`${baseStyle} text-gray-600 hover:text-[#181717]`} />
    default:
      return <Globe2 size={size} className={`${baseStyle} text-gray-600 hover:text-gray-900`} />
  }
};

const EmptyState = ({text}) => (
  <div className="text-center py-8 bg-stone-50 rounded-lg">
    <p className="text-gray-500 text-sm">{text}</p>
  </div>
)

const NumberCounter = ({ number, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calculate step size and interval duration based on the target number and duration
    const step = Math.max(1, Math.floor(number / (duration / 50))); // Set a minimum step of 1
    const intervalTime = Math.min(50, duration / (number / step)); // Set a minimum interval of 50ms for smoother updates

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount + step >= number) {
          clearInterval(interval); // Stop when target is reached
          return number;
        }
        return prevCount + step;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [number, duration]);

  return <>{count}</>;
};

export function Alert({type,heading,text,setShow}) {
  //const [show,setShow] = useState(true)
  const close = () => {
    setShow(false)
  }
  let colorCode = ''
  switch(type){
    case 'error':
      return(
        <>
         {<div className={`fixed inset-0 backdrop-blur-md bg-black bg-opacity-20 z-[20000] flex items-center justify-center`}>
            <div className={`rounded-sm bg-red-100 border-l-4 flex gap-4 border-l-red-500 relative p-8`}>
                <div className={`text-red-500 self-start`}><Info/></div>
                <div className={`space-y-3 text-red-500 flex-1`}>
                  <h4 className={`font-medium`}>{heading}</h4>
                  <p className={`text-sm`}>{text}</p>
                </div>
                <div onClick={close} className={`text-red-500 hover:text-red-600 cursor-pointer absolute right-2 top-2 text-sm`}><X/></div>
            </div>
          </div>}
        </>
      )
      break;
    case 'warning':
      return(
        <>
          {<div className={`fixed inset-0 backdrop-blur-md z-[20000] bg-black bg-opacity-20 flex items-center justify-center`}>
            <div className={`rounded-sm bg-yellow-50 border-l-4 flex gap-4 border-l-yellow-500 relative p-8`}>
                <div className={`text-yellow-500 self-start`}><TriangleAlert/></div>
                <div className={`space-y-3 text-yellow-500 flex-1`}>
                  <h4 className={`font-medium`}>{heading}</h4>
                  <p className={`text-sm`}>{text}</p>
                </div>
                <div onClick={close} className={`text-yellow-500 hover:text-yellow-600 cursor-pointer absolute right-2 top-2 text-sm`}><X/></div>
            </div>
          </div>}        
        </>
      )
      break;
    case 'success':
      return(
        <>
          {<div className={`fixed inset-0 backdrop-blur-md bg-black z-[20000] bg-opacity-20 flex items-center justify-center`}>
            <div className={`rounded-sm bg-green-100 border-l-4 flex gap-4 border-l-green-500 relative p-8`}>
                <div className={`text-green-500 self-start`}><Check/></div>
                <div className={`space-y-3 text-green-500 flex-1`}>
                  <h4 className={`font-medium`}>{heading}</h4>
                  <p className={`text-sm`}>{text}</p>
                </div>
                <div onClick={close} className={`text-green-500 hover:text-green-600 cursor-pointer absolute right-2 top-2 text-sm`}><X/></div>
            </div>
          </div>}        
        </>
      )
  }

}

export function ConfirmAlert({ heading, text, onConfirm,setShow }) {
  //const [show, setShow] = useState(true);

  const handleConfirm = () => {
    setShow(false);
    onConfirm(true); // Resolve with `true` when confirmed
  };

  const handleCancel = () => {
    setShow(false);
    onConfirm(false); // Resolve with `false` when canceled
  };

  return (
    (
      <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-20 flex z-[20000] items-center justify-center">
        <div className="rounded-sm bg-yellow-50 border-l-4 border-yellow-500 p-8 flex gap-4 relative">
          <div className="text-yellow-500 self-start">
            <TriangleAlert className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-4 text-yellow-700 flex-1">
            <h4 className="font-medium">{heading}</h4>
            <p className="text-sm">{text}</p>
            <div className="flex gap-4 text-sm mt-2">
              <button
                className="px-4 py-2 text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-500 border rounded-md"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 text-yellow-500 border-yellow-500 hover:text-white hover:bg-yellow-500 border rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
          </div>
          </div>
          <button
            className="text-yellow-500 hover:text-yellow-600 cursor-pointer absolute right-2 top-2"
            onClick={() => setShow(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    )
  );
}


export {ActionButton,CloseButton,SectionHeading,PageHeading,SearchBar,TableHead,TableBody,TableRow,TableData,StatusPill,InputContainer,InputElement,TextArea,DisplaySocial,EmptyState,NumberCounter,ComplexSelect};
