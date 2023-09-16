import { useEffect } from 'react';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useRequireLogin = (user: User | null) => {
  const navigate = useNavigate();

  const checkUserLoginStatus = async () => {
    if (!user) {
      const confirmResponse = window.confirm('🌝 로그인 유저만 사용 가능합니다. 로그인 하시겠습니까?');
      if (confirmResponse) {
        navigate('/');
      } else {
        navigate(-1);
      }
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  }, [user, navigate]);
};

export default useRequireLogin;
