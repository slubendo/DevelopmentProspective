type BlockHeader2Props = {
  header: string;
  className?: string;
};

export default function BlockHeader2({ header, className }: BlockHeader2Props) {
  return (
    <h2 className={`pb-2 text-lg font-normal ${className}`}>{header}</h2>
  );
}
