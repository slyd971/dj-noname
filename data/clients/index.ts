import { noNameClient } from "@/data/clients/noname";
import type { ClientConfig } from "@/data/clients/types";

export const clientRegistry = [
  noNameClient,
] as const;

export type ClientSlug = (typeof clientRegistry)[number]["slug"];

const clientsBySlug = new Map<string, ClientConfig>(
  clientRegistry.map((client) => [client.slug, client])
);

export function getClients(): ClientConfig[] {
  return [...clientRegistry];
}

export function getClientBySlug(slug?: string | null): ClientConfig | null {
  if (!slug) return null;

  return clientsBySlug.get(slug.toLowerCase()) ?? null;
}
