export interface IModalProps {
  children?: React.ReactNode;
  opened: boolean;
  onClose: () => void;
  title?: string;
}
