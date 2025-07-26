// Card component props interface
export interface CardProps {
  title: string;
  content: string;
}

// Post data interface
export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

// Modal component props interface
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<Post, "id" | "createdAt">) => void;
}

// Button component props interface
export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
