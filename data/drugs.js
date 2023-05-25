export const drugData = {
    cannabis : {
        name: "Cannabis",
        icon: "https://cdn-icons-png.flaticon.com/512/252/252230.png",
        aliases: ["Weed", "Marijuana", "Pot", "Kush"],
        description: "Cannabis is a psychoactive drug from the cannabis plant used both medicinally and recreationally. It is smoked or ingested and users report feeling relaxed, happy, and hungry, along with pain relief. This comes at the risk of potential anxiety, paranoia, mild hallucination or even psychosis. There are many strains of Cannabis and each may significantly change the experience.",
        effects: {
            positive: ["Relaxation", "Talkativeness", "Happiness", "Creativity", "Laughter", "Pain Relief", "Appetite Enhacement", "Emotion Enhancement"],
            negative: ["Anxiety", "Paranoia", "Slurred Speech", "Increased Heart Rate", "Poor Memory", "Fatigue", "Dry Mouth", "Red Eyes"],
            after: ["Anxiety", "Depression", "Dehydration", "Fatigue", "Low Motivation",],
            overdose: ["Extreme Anxiety", "Panic Attack", "Uncontrollable Shaking", "High Blood Pressure", "Headache", "Psychosis", "Seizure"]
        },
        routes: {
            smoked: {
                route: "Smoked",
                bioavailability: "<35%",
                dosage: {
                    threshold: "0.4 mg THC",
                    light: "0.4 - 2 mg THC",
                    common: "2 - 4 mg THC",
                    strong: "4 - 10 mg THC",
                    heavy: "10 mg THC +",
                },
                duration: {
                    total: "2.3 - 5 hours",
                    onset: "0.1 - 10 minutes",
                    comeup: "5 - 10 minutes",
                    peak: "15 - 45 minutes",
                    offset: "3 - 4 hours",
                    after: "45 - 180 minutes"
                },
                instructions: "Smoking is the most common way of consuming cannabis, but it can be harmful to the lungs and respiratory system. Use a pipe, bong, or vaporizer instead of rolling papers to reduce the amount of harmful smoke. Avoid holding the smoke in your lungs for an extended period, as this doesn't increase the high but can cause more damage. Take breaks between hits to allow your body to process the THC and recognize when you're sufficiently high to avoid overconsumption."
            },
            oral: {
                route: "Oral",
                bioavailability: "<12%",
                dosage: {
                    threshold: "1 mg THC",
                    light: "2.5 - 5 mg THC",
                    common: "5 - 10 mg THC",
                    strong: "10 - 25 mg THC",
                    heavy: "25 mg THC +",
                },
                duration: {
                    total: "4 - 10 hours",
                    onset: "20 - 60 minutes",
                    comeup: "30 - 60 minutes",
                    peak: "1 - 2 hours",
                    offset: "4 - 6 hours",
                    after: "6 - 12 hours"
                },
                instructions: "Consuming cannabis orally, such as in the form of edibles or tinctures, is a safer alternative to smoking or vaping. However, because it takes longer to feel the effects (up to 2 hours), it can be easy to consume too much. Start with a low dose (5-10mg of THC), wait at least two hours before taking more. Always read the packaging for dosing information, and remember that the effects can be stronger and last longer than when smoked."
            },
        },
        info: {
            name: "Cannabis",
            dosage: "Cannabis is often smoked or ingested. While ingesting cannabis is better for your lungs, it is often longer lasting and more intense. When dosing cannabis, always start with a small amount. If it's an edible, wait at least two hours before having more as the effects can sneak up on you. If you're smoking, take breaks between hits to let the high set in. Always remember: you can always have more, but you can't have less once it's taken.",
            userTripReports: "Information about user trip reports...",
            interactions: "Information about drug interactions...",
            harmReductionTips: "Information about harm reduction tips...",
            risks: "Information about drug risks...",
            theLaw: "Information about the law...",
            references: "References..."
        },
    },
    methamphetamine : {
        name: "Methamphetamine",
        icon: "https://cdn-icons-png.flaticon.com/512/1685/1685854.png",
        aliases: ["Meth", "Ice", "Tina", "Speed"],
        description: "Methamphetamine is a powerful, highly addictive stimulant that speeds up the central nervous system. It takes the form of a white, odorless, bitter-tasting crystalline powder that easily dissolves in water or alcohol. It is smoked, ingested, or snorted and users report feeling energized, confident, and euphoric but associated with anxiety, paranoia, hyperactivity, and even psychosis.",
        effects: {
            positive: ["Euphoria", "Increased Energy", "Talktaiveness", "Confidence", "Focus Enhancement", "Empathy Enhancement", "Time Acceleration", "Increased Libido"],
            negative: ["Insomnia", "Anxiety", "Compulsive Redosing", "Increased Heart Rate", "Appetite Suppression", "Sweating", "Body Odor", "Teeth Grinding"],
            after: ["Anxiety", "Depression", "Irritability", "Appetite Suppression", "Low Motivation", "Psychosis", "Suicidal Ideation"],
            overdose: ["Chest Pain", "Rapid Heart Rate", "Confusion", "Heart Attack", "Stroke", "Seizure", "Hyperthermia", "Death"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "~70%",
                dosage: {
                    threshold: "5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 25 mg",
                    strong: "25 - 50 mg",
                    heavy: "50 mg +",
                },
                duration: {
                    total: "8 - 12 hours",
                    onset: "15 - 45 minutes",
                    comeup: "1 - 3 hours",
                    peak: "3 - 5 hours",
                    offset: "3 - 4 hours",
                    after: "12 - 24 hours"
                },
                instructions: "Taking methamphetamine orally is considered one of the safer routes of administration. Meth can be placed in a gel capsule or mixed with a non-acidic drink. Start with a low dose to test your body's reaction and be patient - it may take up to an hour to feel the effects. Be mindful that oral is the longest lasting route of administration and can last almost a full day for new users."
            },
            smoked: {
                route: "Smoked",
                bioavailability: ">90%",
                dosage: {
                    threshold: "5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 25 mg",
                    strong: "25 - 60 mg",
                    heavy: "60 mg +"
                },
                duration: {
                    total: "2 - 6 hours",
                    onset: "7 - 10 seconds",
                    comeup: "5 - 10 seconds",
                    peak: "1 - 3 hours",
                    offset: "1 - 3 hours",
                    after: "2 - 24 hours"
                },
                instructions: "When smoking meth, use a proper 'meth pipe' or 'oil burner'. Heat the substance gently by moving the flame around under the pipe rather than holding it in one place. Allow the substance to cool slightly between hits to prevent overheating, which can lead to harmful byproducts. Always ensure the pipe is clean to reduce the risk of inhaling harmful residues."
            },
            insufflated: {
                route: "Insufflated",
                bioavailability: ">90%",
                dosage: {
                    threshold: "5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 30 mg",
                    strong: "30 - 60 mg",
                    heavy: "60 mg +"
                },
                duration: {
                    total: "4 - 7 hours",
                    onset: "3 - 5 minutes",
                    comeup: "3 - 5 hours",
                    peak: "1.5 - 3 hours",
                    offset: "2 - 4 hours",
                    after: "6 - 24 hours"
                },
                instructions: "When snorting meth, always use a clean, unused straw or rolled piece of paper, to avoid transmission of diseases. Cut the substance into the finest possible powder to avoid damaging the nasal passages. Alternate nostrils to reduce harm and allow for recovery time between uses."
            },
            rectal: {
                route: "Rectal",
                bioavailability: ">99%",
                dosage: {
                    threshold: "5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 30 mg",
                    strong: "30 - 40 mg",
                    heavy: "40 mg +"
                },
                duration: { 
                    total: "6 - 10 hours",
                    onset: "5 - 15 minutes",
                    comeup: "3 - 5 hours",
                    peak: "2 - 4 hours",
                    offset: "3 - 5 hours",
                    after: "12 - 24 hours"
                },
                instructions: "This method involves dissolving meth in water and administering it rectally using a syringe (without a needle) or an enema. Ensure cleanliness to avoid infection; sterilize the syringe and wash your hands thoroughly before and after. Start with a low dose to assess your body's reaction."
            },
            intravenous: {
                route: "Intravenous",
                bioavailability: "~100%",
                dosage: {
                    threshold: "5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 30 mg",
                    strong: "30 - 40 mg",
                    heavy: "40 mg +"
                },
                duration: {
                    total: "4 - 8 hours",
                    onset: "15 - 30 seconds",
                    comeup: "1 - 2 minutes",
                    peak: "1 - 3 hours",
                    offset: "3 - 4 hours",
                    after: "12 - 24 hours"
                },
                instructions: "Injecting methamphetamine is the riskiest method due to potential for overdose, vein damage, abscesses, and transmission of diseases like HIV and Hepatitis C. It's crucial to use a clean, unused needle each time. Never share needles or other injection equipment. Start with a low dose, draw up through a sterile cotton filter, and clean the injection site with an alcohol wipe beforehand. Always seek out a safe, relaxed environment, ideally with someone who can help in case of an emergency."
            },
        },
        info: {
            name: "Methamphetamine",
            dosage: "When it comes to taking meth, always start with a small dose, especially with a new batch. It’s critical to purchase a milligram scale in order to dose accurately. Be aware that dosing can be inconsistent when using different routes of administration, and transitioning from one method to another might require dosage adjustments. Taking a break between uses can stop you needing more and more each time. And always remember: it's easier to take more later, but you can't take less once it's in your system. So, go slow and be careful.",
            userTripReports: "Information about user trip reports...",
            interactions: "Information about drug interactions...",
            harmReductionTips: "Information about harm reduction tips...",
            risks: "Information about drug risks...",
            theLaw: "Information about the law...",
            references: "References..."
        },
    }
};