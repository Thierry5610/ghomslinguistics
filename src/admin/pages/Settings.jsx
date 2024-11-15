import { useEffect } from "react";
import { NumberCounter } from "../components/Atoms";
import { useNavigate } from "react-router";
import { isSession } from "../../SupabaseServices";

export default function Settings () {
    const navigate = useNavigate()
    useEffect(() => {
      const checkSession = async () => {
        const { data: { session } } = await isSession();
  
        if (!session) {
          navigate('/admin');
        } 
      };
  
      checkSession();
    }, [navigate]);
    return(
        <div className="flex text-stone-500 items-center justify-center">
            <div>Coming soon</div>
        </div>
    )
}