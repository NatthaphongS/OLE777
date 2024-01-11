import ContentBox from '../component/contentBox';
import { fetctData } from '../util/api';

export default async function Peraturan() {
  const peraturan = await fetctData('peraturan');
  return (
    <div className="px-3">
      <ContentBox content={peraturan} />
    </div>
  );
}
