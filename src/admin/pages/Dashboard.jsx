import { LuMessageSquare } from "react-icons/lu"
import { FaCode, FaPaintBrush } from "react-icons/fa" // Import more icons for variety

export default function Dashboard () {
    return (
        <div className="flex flex-wrap gap-6 md:p-6 flex-1">
            <Card icon={<LuMessageSquare />} shade={"lime"} heading={"Content Writing"} text={"12 lessons"} />
            <Card icon={<FaCode />} shade={"blue"} heading={"Web Development"} text={"8 lessons"} />
            <Card icon={<FaPaintBrush />} shade={"red"} heading={"Graphic Design"} text={"10 lessons"} />
            <Card icon={<LuMessageSquare />} shade={"lime"} heading={"Marketing Strategies"} text={"6 lessons"} />
            <Card icon={<FaCode />} shade={"blue"} heading={"Data Science"} text={"15 lessons"} />
            <Card icon={<FaPaintBrush />} shade={"red"} heading={"UI/UX Design"} text={"7 lessons"} />
        </div>
    )
}

const Card = ({ icon, heading, text, shade }) => {
    let iconBg = 'bg-red-300'
    switch (shade) {
        case 'red':
            iconBg = 'bg-red-300'
            break;
        case 'lime':
            iconBg = 'bg-lime-300'
            break;
        case 'blue':
            iconBg = 'bg-sky-300'
            break;
    }
    return (
        <div className="bg-white rounded-lg p-3 md:max-w-[200px] w-full shadow-md">
            <div className="flex gap-2 items-center">
                <div className={`p-3 rounded-full ${iconBg} text-3xl  md:text-xl text-stone-900`}>
                    {icon}
                </div>
                <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-xl md:text-sm font-semibold text-stone-900">{heading}</h3>
                    <p className="text-xs text-stone-500">{text}</p>
                </div>
            </div>
        </div>
    )
}
