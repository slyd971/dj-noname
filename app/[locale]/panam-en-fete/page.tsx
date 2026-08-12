import {
  PanamPage,
  generatePanamMetadata,
  type PanamPageProps,
} from "@/app/panam-en-fete/PanamPage";

type LocalizedPanamPageProps = {
  params?: Promise<{
    locale?: string;
  }>;
  searchParams?: PanamPageProps["searchParams"];
};

export async function generateMetadata({
  params,
  searchParams,
}: LocalizedPanamPageProps) {
  const resolvedParams = params ? await params : undefined;

  return generatePanamMetadata({
    locale: resolvedParams?.locale,
    searchParams,
  });
}

export default async function Page({
  params,
  searchParams,
}: LocalizedPanamPageProps) {
  const resolvedParams = params ? await params : undefined;

  return (
    <PanamPage
      locale={resolvedParams?.locale}
      searchParams={searchParams}
    />
  );
}
