type PlaceholderMediaProps = {
  label: string;
  className?: string;
  aspect?: string;
};

// Marca visualmente onde uma foto/mídia real da clínica deve entrar.
// Não substituir por imagens de banco genéricas sem aviso do usuário.
export default function PlaceholderMedia({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 p-4 text-center ${className}`}
    >
      <span className="text-sm font-medium text-brand-700">[PENDENTE: {label}]</span>
    </div>
  );
}
