import {
  PanamPage,
  generatePanamMetadata,
  type PanamPageProps,
} from "@/app/panam-en-fete/PanamPage";

export const generateMetadata = generatePanamMetadata;

export default function Page({ searchParams }: PanamPageProps) {
  return <PanamPage searchParams={searchParams} />;
}
