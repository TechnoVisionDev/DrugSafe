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
            introduction: "Cannabis, also commonly known as marijuana, weed, or pot, is a psychoactive plant that has been used by humans for thousands of years. The plant contains various chemical compounds, with the most notable being tetrahydrocannabinol (THC) and cannabidiol (CBD). THC is primarily responsible for the 'high' or psychoactive effects, while CBD has therapeutic properties without causing a high.\n People consume cannabis in various forms - it can be smoked, vaporized, eaten in edibles, or applied topically. Its effects can include feelings of relaxation and euphoria, altered sensory perception, and increased appetite, but it can also cause anxiety or paranoia in some individuals. While not as harmful as some substances, misuse can still lead to mental health issues or dependency.",
            history: "Cannabis has a long history dating back thousands of years. Ancient cultures used it for medicinal and ritual purposes, and it's even been found in tombs from ancient Egypt. Modern use of cannabis, both recreationally and medicinally, has fluctuated in response to societal and legal changes. The 20th century saw periods of widespread use and severe criminalization. In recent years, there's been a shift towards legalization and recognition of its medicinal benefits in many parts of the world. Despite this, legal status and public opinion on cannabis use vary greatly between regions and cultures.",
            pharmacology: "Cannabis exerts its effects primarily through compounds called cannabinoids. The most well-known of these are THC and CBD. THC interacts with cannabinoid receptors in the brain to release dopamine, creating a feeling of euphoria. CBD, on the other hand, does not produce a high and is believed to interact with other receptors in the body, resulting in various potential therapeutic effects.\n However, chronic, heavy use of cannabis can lead to alterations in the brain's reward system, potentially leading to dependence. Additionally, THC can have varying effects on different individuals, and in some cases may increase anxiety or induce a state of paranoia. Understanding the pharmacology of cannabis helps underline the importance of moderation and responsible use.",
            effects: "When you use cannabis, you might feel relaxed, happy, and your senses may seem more intense – like colors being brighter and food tasting better. Your thoughts might jump around, and time might feel like it's slowing down. Everyone's experience can vary, and the effects can depend on the strain of cannabis (Indica strains are usually more relaxing, while Sativa strains can be energizing).",
            comedown: "After the high of cannabis wears off, you might feel tired or a bit foggy. You could feel hungry – people often call this the \"munchies\". Some people might feel a bit anxious or paranoid, but this usually passes. Rest, hydration, and a good meal can usually help you feel normal again.",
            overdose: "Overdoing it with cannabis is usually not dangerous, but it can be uncomfortable. You might feel paranoid or anxious. You could feel dizzy, have a fast heart rate, or even feel like you're \"greening out\" – this is when you feel sick, sweaty, and might throw up. The best thing to do is try to relax, find a quiet place where you can lie down, and remember that these feelings will pass. It can help to have someone around who knows what's happening and can keep an eye on you.",
            dosage: "Cannabis is often smoked or ingested. While ingesting cannabis is better for your lungs, it is often longer lasting and more intense. When dosing cannabis, always start with a small amount. If it's an edible, wait at least two hours before having more as the effects can sneak up on you. If you're smoking, take breaks between hits to let the high set in. Always remember: you can always have more, but you can't have less once it's taken.",
        
        },
        images: [
            "https://cdn.adf.org.au/media/images/cannabis.width-1524.jpg",
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/320984_1100-732x549.jpg",
            "https://cdn.adf.org.au/media/images/cannabis-social.2e16d0ba.fill-1200x1200.jpg"
        ]
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
            introduction: "Methamphetamine, often known simply as 'meth', is a highly potent and addictive psychoactive drug. It typically takes the form of a white, odorless, and bitter-tasting crystalline powder. There are various methods of intake, including swallowing, snorting, smoking, or injecting. Meth stimulates the brain, resulting in a rush of energy and focus, but it can also induce feelings of anxiety, irritability, and paranoia. Despite its potent high, meth is a highly dangerous and illegal substance in many jurisdictions, primarily due to its potential for addiction, health damage, and societal harm.",
            history: "The history of methamphetamine dates back to the late 19th century, when it was first synthesized. Its powerful stimulating effects led to its use by soldiers in World War II to combat fatigue and enhance focus. However, the long-term consequences became increasingly apparent post-war, leading to growing concerns about its safety. By the 1960s, meth had permeated into the realm of recreational drug use and quickly gained notoriety for its intense high and addictive nature. Subsequently, it was criminalized in many regions. Despite legal restrictions, methamphetamine use spread globally, often wreaking havoc in communities due to its association with crime, social decay, and severe health issues.",
            pharmacology: "At a biological level, methamphetamine works by altering the chemical landscape of the brain. It primarily boosts the release of dopamine, a neurotransmitter responsible for feelings of pleasure and reward. This flood of dopamine is what produces the intense euphoria associated with meth use. It also releases serotonin and norepinephrine, although this occurs in much smaller amounts compared to the dopamine release.\n However, repeated meth use disrupts normal brain function. It can deplete the brain's own dopamine reserves and damage the brain's ability to naturally produce and regulate dopamine. Over time, this results in a reduced ability to experience pleasure without the drug, leading to dependence and addiction.\n Further, chronic meth use can damage other areas of the brain as well, impairing cognitive functions like memory and learning, and contributing to mental health issues such as depression and anxiety. Some of this damage may be permanent or take years of abstinence to heal. The comprehensive impact of methamphetamine on the brain illustrates the profound risks associated with its use.",
            effects: "When you take meth, it can make you feel extremely energetic, focused, and euphoric. You might talk a lot, move quickly, or feel like you don't need sleep or food. Some people may feel irritable or anxious. These effects typically last from six to twelve hours, but can be longer based on the dose and your body. It’s addictive nature makes compulsive redosing extremely likely.",
            comedown: "Coming down from meth can be tough. It often leads to extreme tiredness, depression, and increased appetite. You might have trouble sleeping and feel anxious, restless, or irritable. The comedown can last several days, and taking care of your body during this time - hydrating, eating, resting - is very important.",
            overdose: "A meth overdose can be life-threatening. Signs include chest pain, high body temperature, fast or irregular heartbeat, trouble breathing, and feeling really agitated or paranoid. In severe cases, it can lead to a stroke, heart attack, or death. If you think someone might be overdosing, this is a medical emergency. Stay with them and call for help right away.",
            dosage: "When it comes to taking meth, always start with a small dose, especially with a new batch. It’s critical to purchase a milligram scale in order to dose accurately. Be aware that dosing can be inconsistent when using different routes of administration, and transitioning from one method to another might require dosage adjustments. Taking a break between uses can stop you needing more and more each time. And always remember: it's easier to take more later, but you can't take less once it's in your system. So, go slow and be careful.",
        },
        images: [
            "https://cdn.adf.org.au/media/images/amphetamines-social.width-1524.jpg",
            "https://media.npr.org/assets/img/2023/01/17/ap22040735539085-9b877e5fc65655e363b3563e87c7488af4ac650f.jpg",
            "https://healthcity.bmc.org/sites/default/files/images/article/meth-feature.jpg"
        ]
    }
};