export const getDocumentIds = (state) => {
    // Example logic to generate document IDs based on formState
    const { flag, vesselGT, vesselKw, safehaven, rank } = state;
    let docs = [0, 1, 2, 3, 4, 5, 6];

    if (rank === 0) { // Captain
        docs.push(7, 8, 9, 10, 11, 27, 28, 29);
        if (vesselGT < 200) {
            if (vesselKw < 3000) {
                docs.push(30)
                if (safehaven < 150) {
                    docs.push(12)
                } else if (safehaven > 150) {
                    docs.push(13)
                }
            } else if (vesselKw < 6000) {
                docs.push(25, 28, 29, 30)
            }
        } else if (vesselGT < 500) {
            if (vesselKw < 600) {
                docs.push(25, 28, 29, 30)
            }
        } else if (vesselGT > 500) {
            if (vesselKw < 6000) {
                docs.push(24, 17, 28, 29, 30)
            } else if (vesselKw > 6000) {
                docs.push(24, 17, 28, 29, 30)
            }
        }
    } else if (rank === 1) { // Chief Officer
        if (vesselGT < 200) {
            if (vesselKw < 3000) {
                if (safehaven < 150) {
                    docs.push(14)
                } else if (safehaven > 150) {
                    docs.push(12)
                }
            } else if (vesselKw < 6000) {
                docs.push(30)
                if (safehaven < 60) {
                    docs.push(14)
                } else if (safehaven < 150) {
                    docs.push(12)
                } else if (safehaven > 150) {
                    docs.push(16)
                }
            }
        } else if (vesselGT < 500) {
            if (vesselKw < 6000) {
                docs.push(7, 8, 9, 26, 30, 28, 29, 16, 15)
                if (safehaven < 150) {
                    docs.push(14)
                } else if (safehaven > 150) {
                    docs.push(13)
                }
            }

        } else if (vesselGT > 500) {
            if (vesselKw < 6000) {
                docs.push(7, 8, 9, 30, 28, 29, 15)
                if (safehaven < 60) {
                    docs.push(16)
                } else if (safehaven > 150) {
                    docs.push(26)
                }
            } else if (vesselKw > 6000) {
                docs.push(7, 8, 9, 30, 28, 29, 15, 16)
                if (safehaven < 60) {
                    docs.push(16)
                } else if (safehaven > 150) {
                    docs.push(26)
                }
            }
        }
    } else if (rank === 2) { // Bosun & Deckhand

    } else if (rank === 3) { // Chief Engineer
        docs.push(8, 9)
        if (vesselGT < 200) {
            if (vesselKw < 3000) {
                if (safehaven < 60) {
                    docs.push(17)
                } else if (safehaven < 150) {
                    docs.push(18)
                } else if (safehaven > 150) {
                    docs.push(22)
                }
            } else if (vesselKw < 6000){
                docs.push(21, 30)
            }
        } else if (vesselGT < 500){
            if(vesselKw < 6000){
                docs.push(7,8,9,17,22,21,23)
            }
        } else if (vesselGT > 500){
            if(vesselKw < 6000){
                docs.push(7,8,9,17,21,30)
                if(safehaven < 150){
                    docs.push(36)
                } else if (safehaven > 150){
                    docs.push(20)
                }
            } else if(vesselKw > 6000){
                docs.push(7,8,9,17,21,30)
                if(safehaven < 150){
                    docs.push(36)
                } else if(safehaven >150){
                    docs.push(19) 
                }
            }
        }
    } else if (rank === 4) { // 2nd Engineer
        docs.push(8,9)
        if(vesselGT < 200){
            if(vesselKw < 3000){
                docs.push(19)
            } else if (vesselKw < 6000){
                docs.push(19)
                if(safehaven > 150){
                    docs.push(22,30)
                }
            }
        } else if (vesselGT < 500){
            if(vesselKw < 6000){
                
            }
        }
    } else if (rank === 5) { // Stewardess

    } else if (rank === 6) { // Chef

    }

    return docs;
};
