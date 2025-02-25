const BASE_URL = "http://localhost:5002";

export async function getProfessori() {
  const response = await fetch(`${BASE_URL}/professori`);
  return response.json();
}

export async function getRicercatori() {
  const response = await fetch(`${BASE_URL}/ricercatori`);
  return response.json();
}

export async function getOrdinari() {
  const response = await fetch(`${BASE_URL}/ordinari`);
  return response.json();
}

export async function getAssociati() {
  const response = await fetch(`${BASE_URL}/associati`);
  return response.json();
}
