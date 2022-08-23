import { PencilAltIcon } from '@heroicons/react/solid';

interface IEditBtn {
  editHandler: () => void;
  inEdit?: boolean;
  className: string;
}

const EditBtn = ({ editHandler, className }: IEditBtn) => {
  return (
    <div onClick={editHandler} className="w-14">
      <PencilAltIcon className={className} />
    </div>
  );
};

export default EditBtn;
