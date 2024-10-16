export default function ItemDetail({ item }: any) {
  return (
    <div className="pt-[100%] relative flex items-center justify-center border border-b-white rounded">
      <div className="absolute inset-0 flex items-center justify-center">
        {item.name}
      </div>
    </div>
  );
}
