import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { useRtkQueryResource } from '~/hooks/useRtkQueryResource';
import { projectSentenceApi } from '~/stores/apis/projectSentence';

import { IProjectSentence } from '~/types/project/sentence';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectSentencePage = (props: Props) => {
  const { id } = useParams();
  const resource = useRtkQueryResource<IProjectSentence>(
    projectSentenceApi,
    'getSentences',
    id
  );

  return (
    <Suspense fallback={<h1>생성 중....</h1>}>
      <Contents resource={resource}></Contents>
    </Suspense>
  );
};

export default ProjectSentencePage;

const Contents = ({ resource }: { resource: () => IProjectSentence }) => {
  const data = resource();
  console.log(data);

  return <>Contents</>;
};
