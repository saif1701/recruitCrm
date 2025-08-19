import { defineStore } from "pinia";
import { candidateData } from "@/data/candidateData";

export const useCandidateStore = defineStore("candidate", {
  state: () => ({
    candidate: null,
  }),
  actions: {
    fetchCandidate() {
      this.candidate = candidateData;
    },
    updateCandidate(updatedCandidate) {
      this.candidate = { ...this.candidate, ...updatedCandidate };
    },
  },
});
