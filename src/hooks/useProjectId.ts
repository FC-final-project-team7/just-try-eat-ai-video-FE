import { useParams } from 'react-router-dom';

const useProjectId = () => {
  const { id } = useParams();
  return String(id);
};

export default useProjectId;
