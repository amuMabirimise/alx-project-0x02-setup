export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  }
  
  export interface PostProps {
    title: string;
    content: string;
    userId: number;
  }
  
  export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
    };
  }  