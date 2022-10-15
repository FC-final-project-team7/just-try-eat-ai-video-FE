import { useParams } from 'react-router-dom';

const useProjectId = (): string => {
  const { id } = useParams();
  return String(id);
};

export default useProjectId;
