import { PencilSquareIcon } from '@heroicons/react/24/solid';

interface IEditBtn {
  editHandler: () => void;
  inEdit?: boolean;
  className: string;
}

const EditBtn = ({ editHandler, className }: IEditBtn) => {
  return (
    <div onClick={editHandler} className="w-14">
      <PencilSquareIcon className={className} />
    </div>
  );
};

export default EditBtn;

