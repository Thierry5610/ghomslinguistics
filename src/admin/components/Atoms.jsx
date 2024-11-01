import { Search } from 'lucide-react';
import React, { Children } from 'react';

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
      <button onClick={onclick} className={`text-amber-500 text-xs ${className}`}>{label}</button>
    )}
  </>
);

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
            min={new Date().toISOString().split('T')[0]}
            className={"p-2 placeholder:text-gray-500 border outline-none w-full rounded-md "+borderStyle}
          />    
          {<span className='text-xs text-red-500'>{error}</span>}
        </div>
      );
    case 'time': 
      return(
        <div className='flex flex-col gap-1 items-start'>
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
export {ActionButton,SectionHeading,PageHeading,SearchBar,TableHead,TableBody,TableRow,TableData,StatusPill,InputContainer,InputElement};
