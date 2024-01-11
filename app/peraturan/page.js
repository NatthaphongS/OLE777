import ContentBox from '../component/contentBox';
import { peraturanApi } from '../util/api';

export default async function Peraturan() {
  const peraturan = await peraturanApi();
  return (
    <div className="px-3">
      <ContentBox content={peraturan} />
    </div>
  );
}
