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
    } if (rank === 1) { // Chief Officer
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
            } else if (vesselGT > 1) { // Less than 500Gt
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
    }

    return docs;
};
