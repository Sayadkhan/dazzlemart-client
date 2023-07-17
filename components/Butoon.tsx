import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva("px-6 py-3 rounded-xl durartion:300", {
  variants: {
    color: {
      green: "bg-accent1 text-light hover:hover:bg-accent1/90",
      dark: "bg-dark text-light hover:hover:bg-dark/90",
      light: "bg-light text-dark hover:hover:bg-light/90",
      ghost: "bg-transparent text-dark hover:hover:bg-dark/10",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  herf: string;
  target?: string;
  placeholder: string;
}

const Butoon: React.FC<ButtonProps> = ({
  herf,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link
      href={herf}
      target={target}
      className={clsx(buttonVariants({ color }))}
    >
      {placeholder}
    </Link>
  );
};

export default Butoon;
