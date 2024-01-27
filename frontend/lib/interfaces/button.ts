export interface DefaultButtonProps {
  displayText?: string;
  className?: string;
}

export interface ButtonProps extends DefaultButtonProps {
  onClick?: () => void;
}

export interface LinkButtonProps extends DefaultButtonProps {
  href: string;
  linkClassName?: string;
}