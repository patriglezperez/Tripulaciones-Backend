
/**
 * Recovery of all Assessment associated with a store,
 * If you have answers associated with that assessment, they go in the
 * resp field in array format with all associated rows.
 * Plus the average of all valuations that do not go to zero
 * @param {string} uuidStore = uuid_store
 * @returns {object} {average: float, data: 
 * {row completo de Table assessment, 
 * resp: [{row completo de Table assessment},{row completo de Table assessment}]},
 * {row completo de Table assessment, 
 * resp: null}
 */

async function processAssessment(assessment) {
    let preparedValuations;
    let value_assessment = 0;
    let amount_assessment = 0;

    try {
        if (assessment) {
            // we calculate the average of the valuations
            assessment.forEach(function(e) {
                if (e.value_assessment > 0) {
                    value_assessment += e.value_assessment;
                    amount_assessment += 1;
                }
            })
            const average = (amount_assessment > 0) ? 
                (value_assessment / amount_assessment) : value_assessment
            
            // we prepare the parent child dependencies format
            let processAssessment = assessment.filter(e => e.tier_assessment);
            processAssessment.forEach((ee,i) => {
                let child; /// inicializamos con solo la declaracion es eso posible ???
                child = assessment.filter(e => ee.uuid_assessment === e.uuid_father_assessment);
                processAssessment[i].resp = child ? child : null; /// seria len > 0 ???
            })
            preparedValuations = {"data": processAssessment, "average": average};
        } else {
            preparedValuations = null;
        }
    } catch (err) {
        /* la jodimos */
    }
    return preparedValuations;
}

module.exports = processAssessment;