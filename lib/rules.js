export const getDocumentIds = (state) => {
    // Example logic to generate document IDs based on formState
    const { flag, vesselGT, vesselKw, safehaven, rank } = state;
    let docs = [0, 1, 2, 3, 4, 5, 6];

    if (rank === 0) { // Captain
        docs.push(7, 8, 9, 10, 11, 27, 28, 29);
        if (vesselKw <= 0) { // Less than 3000Kw
            if (vesselGT < 1) {// Less than 200Gt
                if (safehaven <= 0) {
                    docs.push(14);
                } else if (safehaven <= 1) {
                    docs.push(12);
                } else if (safehaven <= 2) {
                    docs.push(13);
                }
            } else if (vesselGT < 2) { // Less than 500Gt
                docs.push(25)
            } else if (vesselGT == 2) { // Greater than 500Gt
                docs.push(24)
            }
        } else if (vesselKw <= 1) { // Less than 6000Kw
            if (vesselGT < 1) { // Less than 200Gt
                docs.push(25)
            } else if (vesselGT < 2) { // Less than 500Gt
                docs.push(24)
            } else if (vesselGT == 2) { // Greater than 500Gt
                docs.push(24)
            }
        } else if (vesselKw <= 2) { // Greater than 6000Kw
            if (vesselGT < 1) { // Less than 200Gt
                docs.push(24)
            } else if (vesselGT < 2) { // Less than 500Gt
                docs.push(24)
            } else if (vesselGT == 2) { // Greater than 500Gt
                docs.push(24)
            }
        }
    } else if (rank === 1) { // Chief Officer
        if (vesselKw <= 0) { // Less than 3000Kw
            if (vesselGT < 1) {// Less than 200Gt
                if (safehaven <= 0) {

                } else if (safehaven <= 1) {
                    docs.push(14);
                } else if (safehaven <= 2) {
                    docs.push(12);
                }
            } else if (vesselGT > 1) { // Less than 500Gt
                docs.push(15, 16, 29, 28, 30, 26, 9, 8, 7)
                if (safehaven <= 1) {
                    docs.push()
                } else if (safehaven <= 2) {
                    docs.push(14)
                }
            } else if (vesselGT > 1) { // Greater than 500Gt
                docs.push(24)
            }
        } else if (vesselKw <= 1) { // Less than 6000Kw
            if (vesselGT < 1) { // Less than 200Gt
                if (safehaven <= 0) {
                    docs.push(14)
                } else if (safehaven <= 1) {
                    docs.push(12);
                } else if (safehaven <= 2) {
                    docs.push(16);
                }
            } else if (vesselGT <= 1) { // Less than 500Gt
                docs.push(24)
            } else if (vesselGT > 1) { // Greater than 500Gt
                docs.push(24)
            }
        } else if (vesselKw <= 2) { // Greater than 6000Kw
            if (vesselGT < 1) { // Less than 200Gt
                docs.push(24)
            } else if (vesselGT > 1) { // Less than 500Gt
                docs.push(24)
            } else if (vesselGT > 1) { // Greater than 500Gt
                docs.push()
            }
        }
    } else if (rank === 2) { // Bosun & Deckhand


    } else if (rank === 3) { // Chief Engineer
        docs.push(8, 9)
        if (vesselKw <= 0) { // Less than 3000Kw
            if (vesselGT <= 0) { // Less than 200Gt
                if (safehaven <= 0) { // Less than 60 miles
                    docs.push(17)
                } else if (safehaven <= 1) { // Less than 150 miles
                    docs.push(18)
                } else if (safehaven <= 2) { // More than 150 Miles
                    docs.push(20)
                }
            } else if (vesselGT <= 1) { // Less than 500Gt
                docs.push(17, 20, 22, 23, 30)
            }
        } else if (vesselKw <= 1) { // Less than 6000Kw
            docs.push(21, 30)
            if (vesselGT > 1) { // Greater than 500Gt
                docs.push(17)
                if (safehaven <= 0) {

                } else if (safehaven <= 1) { // Over 60 Miles
                    docs.push(37);
                } else if (safehaven <= 2) { // Over 150 Miles
                    docs.push(20);
                }
            }
        } else if (vesselKw > 1) {
            docs.push(21)
            if (safehaven < 1) {
                docs.push(20)
            } else if (safehaven > 1) {
                docs.push(35)
            }
        }

    } else if (rank === 4) { // 2nd Engineer
        docs.push(8, 10)
        if (vesselKw <= 0) { // less than 3000Kw
            if (vesselGT <= 0) { // Less than 200Gt
                if (safehaven >= 1) {
                    docs.push(18)
                }
            } else if (vesselGT <= 1) { // Less than 500Gt
                docs.push(17)
                if (safehaven > 1) {
                    docs.push(19)
                }
            }
        } else if (vesselKw <= 1) { // Under 6000Kw
            docs.push(19)
            if (vesselGT <= 0) { // Less than 200Gt
                if (safehaven > 1) {
                    docs.push(22, 30)
                }
            } else if (vesselGT <= 1) { // Less than 500Gt
                docs.push(17)
                if (safehaven > 1) {
                    docs.push(19)
                }
            }
        } else if (vesselKw >= 1) { // Over 6000Kw

        }
    } else if (rank === 5) { // Stewardess

    } else if (rank === 6) { // Chef

    }

    return docs;
};
