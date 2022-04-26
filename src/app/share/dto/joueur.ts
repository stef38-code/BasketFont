export interface Joueur {
  id?: number;
  nom: string;
  prenom: string;
  dnaissance: string;
  sexe: string;
  nlicence: string;
  catgeorie: number;
  adresse: string;
  cp: string;
  ville: string;
  taille: string;
  email: string;
  portable: string;
  domicile: string;
  pro: string;
  telmeremineur: string;
  emailmeremineur: string;
  telperemineur: string;
  emailperemineur: string;
  FIELD20: string;
  FIELD21: string;
  FIELD22: string;

}
export interface Joueurs {
  joueur: Joueur[];
}
