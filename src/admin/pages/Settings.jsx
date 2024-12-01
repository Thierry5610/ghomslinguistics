import { useEffect } from "react";
import { NumberCounter } from "../components/Atoms";
import { useNavigate } from "react-router";
import { isSession } from "../../SupabaseServices";
import { useTranslation } from "react-i18next";

export default function Settings () {
    const {t} = useTranslation('adminSettings')
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
            <div>{t('message')}</div>
        </div>
    )
}