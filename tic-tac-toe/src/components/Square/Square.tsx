import styles from "@/components/Square/Square.module.css";

type SquareProps = React.ComponentPropsWithoutRef<"button"> & {
  onSquareClick: React.ComponentPropsWithoutRef<"button">["onClick"];
};

export function Square({ children, onSquareClick, ...restProps }: SquareProps) {
  const isDisabled = !!children;

  return (
    <button
      className={styles.component}
      onClick={onSquareClick}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}
