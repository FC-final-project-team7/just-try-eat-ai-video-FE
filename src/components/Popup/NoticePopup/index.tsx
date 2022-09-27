import PopupPortal from '../PopupPortal';

type Props = {
  title?: string;
  body?: string;
  onClose?: () => void;
};

const NoticePopup = ({ title, body, onClose }: Props) => {
  return (
    <PopupPortal>
      <div>
        <h3>{title}</h3>
        <div>{body}</div>
        <button onClick={onClose}>닫기</button>
      </div>
    </PopupPortal>
  );
};

export default NoticePopup;
