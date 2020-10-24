export interface ClassShape {
  name: string;
  teacher: string;
  hours: number;
  exam: string;
  other: string;
  bgColor: string;
  txtColor: string;
  id: number;
}

interface Store {
  physics: ClassShape;
  chemistry: ClassShape;
  it: ClassShape;
  history: ClassShape;
  math: ClassShape;
  norwegian: ClassShape;
  gym: ClassShape;
  german: ClassShape;
  subjectDay: ClassShape;
}

const ClassStore: Store = {
  physics: {
    name: "Fysikk 1",
    teacher: "Nelson",
    hours: 140,
    exam: "Eleven kan trekkes ut til muntlig-praktisk eksamen",
    other: "Morsomt og lærerrikt fag",
    bgColor: "#DE911D",
    txtColor: "#fff",
    id: 1,
  },

  chemistry: {
    name: "Kjemi 1",
    teacher: "Nelson",
    hours: 140,
    exam: "Eleven kan trekkes ut til muntlig-praktisk eksamen",
    other: "Har alltid likt atomer og bindinger, så kjemi er supermorsomt",
    bgColor: "#FADB5F",
    txtColor: "#000",
    id: 2,
  },

  it: {
    name: "Informasjonteknologi 1",
    teacher: "Dmytro",
    hours: 140,
    exam: "Eleven kan trekkes ut til muntlig-praktisk eksamen",
    other: "Definitivt favorittfaget. Elsker å programmere, og lage løsninger som er nyttige og smarte. Er en stor fan av clean code, og prøver å lage god kode som ikke tar 100 år å skrive.",
    bgColor: "#E12D39",
    txtColor: "#fff",
    id: 3,
  },

  history: {
    name: "Historie",
    teacher: "Signe Kari",
    hours: 56,
    exam: "Ingen eksamen",
    other: "Helt greit fag",
    bgColor: "#FF9B9B",
    txtColor: "#000",
    id: 4,
  },

  math: {
    name: "Matematikk R1",
    teacher: "Pål Ove",
    hours: 140,
    exam: "Eleven kan trekkes ut til skriftlig eller muntlig eksamen",
    other:
      "Dette er jo grunnlaget for både fysikk og kjemi, så et veldig spennende fag",
    bgColor: "#51CA58",
    txtColor: "#fff",
    id: 5,
  },

  norwegian: {
    name: "Norsk",
    teacher: "Monica",
    hours: 112,
    exam: "Ingen eksamen før vg3",
    other: "Ikke så veldig intressert i språk, men greit nok",
    bgColor: "#F368FC",
    txtColor: "#fff",
    id: 6,
  },

  gym: {
    name: "Kroppsøving",
    teacher: "Brit",
    hours: 56,
    exam: "Ingen eksamen",
    other: "Liker å holde meg i form så et ganske morsomt fag",
    bgColor: "#35469C",
    txtColor: "#fff",
    id: 7,
  },

  german: {
    name: "Tysk 2 Vg2",
    teacher: "Celina",
    hours: 112,
    exam: "Eleven kan trekkes ut til skriftlig og/eller muntlig eksamen",
    other:
      "Ikke så veldig interessert i språk, men liker hvor matematisk språket er",
    bgColor: "#7C5E10",
    txtColor: "#fff",
    id: 8,
  },


  subjectDay: {
    name: "Fagdag",
    teacher: "Varierer fra uke til uke",
    hours: 0,
    exam: "Varierer ut ifra hvilket fag vi har",
    other:
      `"Fagdag" er timer som er slått sammen til et fag. Dette faget varierer fra uke til uke. Timene varierer også. Derfor det står 0 timer.`,
    bgColor: "#044E54",
    txtColor: "#fff",
    id: 9,
  },
};

export default ClassStore;
