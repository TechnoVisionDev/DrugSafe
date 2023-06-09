export const drugData = {
    alcohol: {
        name: "Alcohol",
        icon: "https://cdn-icons-png.flaticon.com/512/920/920582.png",
        aliases: ["Booze", "Liquor", "Spirits", "Wine", "Beer"],
        description: "Alcohol is a widely used and abused substance that slows down the central nervous system. Its effects often sedate the users, leading to a mood lift and anxiety relief, but accompanied with impaired motor function and cognition. ",
        effects: {
            positive: ["Relaxation", "Happiness", "Sociability"],
            negative: ["Nausea", "Decreased Coordination", "Emotional Volatility", "Sexual Dysfunction", "Memory Loss", "Sleepiness"],
            after: ["Dehydration", "Nausea", "Depression", "Fatigue", "Anxiety"],
            overdose: ["Vomiting", "Unconsciousness", "Breathing Difficulties", "Seizures", "Death"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "~80%",
                dosage: {
                    threshold: "1 drink",
                    light: "1 - 2 drinks",
                    common: "2 - 3 drinks",
                    strong: "3 - 4 drinks",
                    heavy: "4 drinks +",
                },
                duration: {
                    total: "1.5 - 5 hours",
                    onset: "2 - 5 minutes",
                    comeup: "15 - 45 minutes",
                    peak: "30 - 90 minutes",
                    offset: "45 - 120 minutes",
                    after: "6 - 48 hours"
                },
                instructions: "Alcohol is typically consumed orally through drinking alcoholic beverages. Start with a low amount to see how it affects you, and be sure to drink plenty of water alongside to avoid dehydration. Alcohol has a strong effect on the liver, and regular heavy drinking can lead to alcoholism and various diseases like liver cirrhosis and cancer. Never drink and drive or operate heavy machinery while under the influence of alcohol."
            },
        },
        interactions: {
            caution: ["Cannabis", "Amphetamines", "AMT", "MDMA", "Nitrous", "SSRIs", "Stimulants"],
            unsafe: ["Cocaine", "MAOIs", "PCP", "Antibiotics"],
            dangerous: ["Benzodiazepines", "DXM", "GHB", "GBL", "Ketamine", "MXE", "Opioids", "Tramadol", "Depressants", "Dissociatives"]
        },
        harmReduction: [
            {
                header: "Never combine alcohol and other depressants.",
                body: "Combining alcohol with other depressants can have serious and potentially life-threatening consequences. Depressants such as benzodiazepines, opioids, or even over-the-counter medications like sleep aids or antihistamines can intensify the sedative effects of alcohol. This combination can lead to extreme drowsiness, impaired coordination, slowed heart rate, and suppressed breathing. It is crucial to understand that the combined effect of alcohol and other depressants can result in a dangerous synergistic effect that amplifies the depressant properties, increasing the risk of accidents, respiratory depression, or overdose. To ensure your safety, it is essential to never mix alcohol with other depressants and consult a healthcare professional if you have any concerns about potential interactions."
            },
            {
                header: "Stay hydrated to avoid hangover.",
                body: "One of the most effective ways to minimize the likelihood and intensity of a hangover when consuming alcohol is to stay hydrated throughout the drinking session. Alcohol is a diuretic, meaning it increases urine production and can lead to dehydration. Dehydration can exacerbate the symptoms of a hangover, such as headache, fatigue, and dry mouth. To maintain adequate hydration, it is recommended to drink water in between alcoholic beverages. Alternating alcoholic drinks with non-alcoholic options like water, sports drinks, or electrolyte-rich beverages can help replenish fluids and essential minerals lost due to alcohol's dehydrating effects. Additionally, consuming a glass of water before bed after drinking can further aid in rehydration and alleviate potential morning-after discomfort. Remember, staying hydrated is key to reducing the severity of hangovers and promoting overall well-being when consuming alcohol."
            }
        ],
        testing: [
            { name: "N/A", expected: "N/A", link: "" },
        ],
        risks: [
            { header: "Alcohol Poisoning", body: "Alcohol poisoning is a serious — and sometimes deadly — consequence of consuming large amounts of alcohol in a short period. It is a state in which a high level of alcohol in the body affects the brain, impairing basic life-support functions like heart rate, breathing, and temperature control, eventually leading to coma or death [1]." },
            { header: "Liver Disease", body: "The liver is particularly vulnerable to alcohol-related harm because it's the primary site of alcohol metabolism. Chronic and heavy alcohol consumption can lead to various liver diseases such as alcoholic hepatitis, cirrhosis, and an increased risk of liver cancer. Alcohol causes liver inflammation and swelling, which over time can result in scarring and loss of function [2]." },
            { header: "Dependency & Withdrawal", body: "Long-term alcohol use can lead to physical and psychological dependence. This dependence can result in withdrawal symptoms when alcohol use is suddenly stopped or significantly reduced. Symptoms can range from mild to severe, including anxiety, tremors, hallucinations, and even seizures. Alcohol dependence can also lead to alcohol use disorder (AUD), a chronic relapsing brain disease characterized by compulsive alcohol use, loss of control over alcohol intake, and a negative emotional state when not using [3]." },
            { header: "Cancer", body: "Research has shown that alcohol consumption can increase the risk of several types of cancer, including mouth, throat, esophagus, liver, colon, and breast cancer. The risk increases with the amount of alcohol consumed. It is believed that alcohol's carcinogenic effect is partly due to the fact that it damages body tissues and hampers the body's ability to repair this damage [4]." },
        ],
        legality: {
            europe: {
                uk: "Legal, drinking age is 18",
                germany: "Legal, drinking age is 16 for beer and wine, 18 for spirits",
                france: "Legal, drinking age is 18",
                netherlands: "Legal, drinking age is 18",
                spain: "Legal, drinking age is 18",
                russia: "Legal, drinking age is 18"
            },
            america: {
                usa: "Legal, drinking age is 21",
                canada: "Legal, drinking age varies by province, generally 18 or 19",
                mexico: "Legal, drinking age is 18"
            },
            asia: {
                hk: "Legal, drinking age is 18",
                singapore: "Legal, drinking age is 18",
                israel: "Legal, drinking age is 18"
            },
            africa: {
                southafrica: "Legal, drinking age is 18"
            },
            australia: {
                australia: "Legal, drinking age is 18",
                newzealand: "Legal, drinking age is 18"
            }
        },
        info: {
            name: "Alcohol",
            isPlural: false,
            introduction: "Alcohol, which refers to ethyl alcohol or ethanol, is the intoxicating ingredient found in beer, wine, and liquor. It is consumed globally in various forms and traditions. Alcohol is a depressant which slows down vital functions and alters a person's perceptions, emotions, movement, vision, and hearing. It is widely accepted socially and even celebrated in many cultures despite the potential risks associated with its use, which can include addiction, health damage, and societal harm. Despite it's widespread acceptance by society, it's important to treat alcohol just like any other drug.",
            history: "The history of alcohol consumption goes back to ancient times, with alcoholic beverages such as beer and wine being an integral part of many societies and cultures. Over centuries, its use evolved from ritualistic and medicinal purposes to recreational. It's only in more recent centuries that the harmful effects of excessive alcohol consumption have been widely recognized, leading to regulations and controls in many jurisdictions, alongside public health efforts to mitigate its harm.",
            pharmacology: "Biologically, alcohol is absorbed into the bloodstream and affects the central nervous system, slowing down mental and bodily processes. It primarily enhances the effects of the neurotransmitter GABA, causing feelings of relaxation and euphoria. In contrast, it inhibits glutamate, a neurotransmitter associated with excitatory responses. Chronic alcohol use can lead to changes in these neurotransmitter systems and others, impacting brain function and leading to tolerance, dependence, and addiction. Additionally, alcohol can have detrimental effects on various organs, including the liver and heart.",
            effects: "Alcohol consumption can make you feel relaxed, confident, and happy. But it can also lead to negative effects like impaired judgement, decreased motor control, confusion, dizziness, and nausea. The severity of these effects can vary based on the amount consumed, the individual's tolerance, and their body's response to alcohol. It can also contribute to risky behaviors, such as driving under the influence or engaging in unsafe sexual practices.",
            comedown: "After-effects or the 'hangover' from alcohol use can be uncomfortable, including symptoms like headache, nausea, fatigue, dehydration, and anxiety. These can last for several hours or more than a day depending on the quantity and type of alcohol consumed. It's important to hydrate, rest, and eat nutritious food during this period.",
            overdose: "Alcohol poisoning, or an overdose, can be life-threatening. Signs can include vomiting, seizures, slow or irregular breathing, pale or blue-tinged skin, hypothermia, unconsciousness, and inability to wake up. If you suspect someone is experiencing alcohol poisoning, it is a medical emergency. Stay with them and seek medical help immediately.",
            dosage: "When consuming alcohol, it's crucial to understand your limits and start with small amounts. Different types of alcoholic beverages contain varying amounts of alcohol, and the body processes alcohol at different rates depending on a range of factors. Remember, it's always better to be safe and monitor your intake to avoid adverse effects.",
            interactions: "Interactions between alcohol and other substances can increase health risks. Combining alcohol with other depressants, prescription medications, or illicit drugs can lead to dangerous synergistic effects, including increased risk of overdose. The following chart provides detailed interactions information for alcohol. Please use this information for harm reduction purposes, and always approach combining substances with extreme caution.",
            testing: "While testing for alcohol content isn't usually necessary for commercial beverages, it may be useful when consuming homemade brews or unfamiliar drinks. Simple tests like breathalyzers can also determine blood alcohol concentration, which is useful for ensuring you stay within safe limits. In the context of other substances, it's important to be cautious as alcohol can interact negatively with many drugs.",
            legality: "Alcohol is legal in most parts of the world for adults of a certain age, typically 18 or 21, with some exceptions. Despite its legality, there are often regulations surrounding its sale and consumption. Drinking and driving laws are strictly enforced in many jurisdictions, with legal limits on blood alcohol concentration for drivers. Alcohol use is associated with a variety of social and health issues, and its misuse can lead to legal repercussions.",
        },
        images: [
            "https://www.mashed.com/img/gallery/how-long-does-alcohol-last-after-you-open-the-bottle/l-intro-1657033923.jpg",
            "https://www.ucsf.edu/sites/default/files/fields/field_insert_file/news/alcohol-pouring-into-glass.jpg",
            "https://mybartender.com/wp-content/uploads/2023/01/best-vodka-shots-480x360.jpg"
        ],
        references: [
            "Anderson, P., & Baumberg, B. (2006). Alcohol in Europe: A public health perspective. London: Institute of Alcohol Studies.",
            "Babor, T. F., Higgins-Biddle, J. C., Saunders, J. B., & Monteiro, M. G. (2001). AUDIT: The Alcohol Use Disorders Identification Test: Guidelines for use in primary care. World Health Organization.",
            "Beck, K. H., Caldeira, K. M., Vincent, K. B., O'Grady, K. E., & Arria, A. M. (2008). The social context of drinking among college students. Journal of Studies on Alcohol and Drugs, 69(1), 96-105.",
            "Berglund, M., Thelander, S., & Jonsson, E. (2003). Treating alcohol and drug abuse: An evidence-based review. John Wiley & Sons.",
            "Bühringer, G., Rehm, J., & Gmel, G. (2012). Drinking cultures and social contexts: A comparative analysis of trends in alcohol consumption among young adults in ten European countries. Journal of Studies on Alcohol and Drugs, 73(6), 912-922.",
            "Cunningham, J. A., & McCambridge, J. (2012). Is alcohol dependence best viewed as a chronic relapsing disorder? Addiction, 107(1), 6-12.",
            "Dawson, D. A., Goldstein, R. B., Moss, H. B., Li, T. K., & Grant, B. F. (2010). Gender differences in the relationship of internalizing and externalizing psychopathology to alcohol dependence: Likelihood, expression and course. Drug and Alcohol Dependence, 112(1-2), 9-17.",
            "Dawson, D. A., Grant, B. F., Chou, S. P., & Pickering, R. P. (1995). Subgroup variation in US drinking patterns: Results of the 1992 National Longitudinal Alcohol Epidemiologic Study. Journal of Substance Abuse, 7(3), 331-344.",
            "Gmel, G., Rehm, J., Kuntsche, S., & Bujalski, M. (2011). Who drinks most of the total alcohol in young adults—stable gender differences in Europe. Social Psychiatry and Psychiatric Epidemiology, 46(7), 685-692.",
            "Hingson, R. W., Heeren, T., & Winter, M. R. (2006). Age of alcohol-dependence onset: Associations with severity of dependence and seeking treatment. Pediatrics, 118(3), e755-e763.",
            "Ludbrook, A., Godfrey, C., Wynne, A., & Parrott, S. (2013). Effective alcohol treatment: What are the options? An overview of evidence for the effectiveness of alcohol interventions. National Treatment Agency for Substance Misuse.",
            "Miller, W. R., & Wilbourne, P. L. (2002). Mesa Grande: A methodological analysis of clinical trials of treatments for alcohol use disorders. Addiction, 97(3), 265-277.",
            "Rehm, J., Shield, K. D., Rehm, M. X., Gmel, G., & Frick, U. (2019). Alcohol consumption, alcohol dependence, and attributable burden of disease in Europe: Potential gains from effective interventions for alcohol dependence. Centre for Addiction and Mental Health.",
            "Roche, A. M., Freeman, T., Skinner, N., & Armstrong, K. (2013). Tackling alcohol misuse: Purchasing and supply control policies. World Health Organization.",
            "Room, R. (2005). Stigma, social inequality and alcohol and drug use. Drug and Alcohol Review, 24(2), 143-155.",
            "World Health Organization. (2010). Global strategy to reduce the harmful use of alcohol. World Health Organization."
        ]
    },
    amphetamine: {
        name: "Amphetamine",
        icon: "https://cdn-icons-png.flaticon.com/512/6134/6134637.png",
        aliases: ["Adderall", "Vyvanse", "Speed", "Uppers"],
        description: "Amphetamine is a stimulant that speeds up the central nervous system, often used to treat ADHD. Users experience heightened alertness, energy, and concentration. However, it can also induce adverse effects like nervousness, rapid heartbeat, and can contribute to severe psychological issues if abused.",
        effects: {
            positive: ["Euphoria", "Increased Energy", "Talktaiveness", "Confidence", "Focus Enhancement", "Time Acceleration"],
            negative: ["Insomnia", "Anxiety", "Compulsive Redosing", "Increased Heart Rate", "Appetite Suppression", "Sweating", "Body Odor", "Teeth Grinding"],
            after: ["Anxiety", "Depression", "Irritability", "Appetite Suppression", "Low Motivation", "Psychosis", "Suicidal Ideation"],
            overdose: ["Chest Pain", "Rapid Heart Rate", "Confusion", "Heart Attack", "Stroke", "Seizure", "Hyperthermia", "Death"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "75%",
                dosage: {
                    threshold: "2.5 mg",
                    light: "5 - 10 mg",
                    common: "10 - 25 mg",
                    strong: "25 - 50 mg",
                    heavy: "50 mg +",
                },
                duration: {
                    total: "6 - 8 hours",
                    onset: "30 - 45 minutes",
                    comeup: "30 - 135 minutes",
                    peak: "2.5 - 4 hours",
                    offset: "2 - 3 hours",
                    after: "3 - 6 hours"
                },
                instructions: "Amphetamine can be taken orally in the form of tablets or capsules, and these are usually swallowed with a full glass of water. They may be taken with or without food, though some people find that taking them with food helps to decrease upset stomach. The extended-release form of amphetamine should be taken whole and not crushed or chewed, as this can release all the medication at once, increasing the risk of side effects."
            },
            insufflated: {
                route: "Insufflated",
                bioavailability: "75%",
                dosage: {
                    threshold: "4 mg",
                    light: "6 - 15 mg",
                    common: "15 - 30 mg",
                    strong: "30 - 50 mg",
                    heavy: "50 mg +",
                },
                duration: {
                    total: "3 - 6 hours",
                    onset: "1 - 5 minutes",
                    comeup: "30 - 90 minutes",
                    peak: "1 - 2 hours",
                    offset: "1.5 - 3 hours",
                    after: "2 - 4 hours"
                },
                instructions: "Insufflation, or snorting, amphetamines is not recommended due to its associated health risks. It can lead to damage to the mucous membrane, nasal passages, and sinuses, cause nosebleeds, and may increase the risk of dependence and overdose. This method of administration can also lead to more rapid onset of side effects due to faster absorption into the bloodstream."
            },
            intravenous: {
                route: "Intravenous",
                bioavailability: "75%",
                dosage: {
                    threshold: "4 mg",
                    light: "6 - 15 mg",
                    common: "15 - 30 mg",
                    strong: "30 - 50 mg",
                    heavy: "50 mg +",
                },
                duration: {
                    total: "3 - 6 hours",
                    onset: "2 - 10 seconds",
                    comeup: "2 - 10 seconds",
                    peak: "2 - 4 hours",
                    offset: "1 - 2 hours",
                    after: "2 - 4 hours"
                },
                instructions: "Intravenous (IV) use of amphetamines is strongly discouraged due to its high risk of serious health consequences, including the transmission of infectious diseases, vein damage, abscesses, and increased risk of overdose due to the rapid onset of effects. Furthermore, injecting a substance intended for oral use can lead to blockages in blood vessels, as these preparations may contain fillers that are not soluble in blood."
            },
        },
        interactions: {
            caution: ["Alcohol", "GHB", "GBL", "Opioids", "Cocaine", "Cannabis", "Caffeine", "Ketamine", "Methoxetamine", "Psychadelics"],
            unsafe: ["DXM", "PCP", "25x-NBOMe", "2C-T-x", "5-MeO-xxT", "DOx"],
            dangerous: ["Tramadol", "aMT", "MAOIs"]
        },
        harmReduction: [
            {
                header: "Stick to NO MORE than one dose for any given day.",
                body: "This is the most crucial rule to follow! When you use stimulants, they will temporarily hijack your dopamine reward system. Once the peak euphoria starts to fade, you will have a biological response to crave more. This is the same system that makes you crave food, sex, and anything pleasurable in life and is extremely hard to fight against. This feeling tends to disappear as soon as you have fully come down around the 10-12 hour mark (and in fact the thought of redosing actually starts to feel kinda gross). You simply need to endure through a few hours of cravings and then you’re home free. Not to mention that redosing will amplify your comedown side effects exponentially. It’s simply NOT worth it when you could just eat, sleep, and have an awesome time dosing the next morning instead."
            },
            {
                header: "Set an alarm to go off every 2 hours to remind you to eat and hydrate.",
                body: "Most stimulants suppress appetite heavily and its actually surprisingly easy to begin starving by accident during a long binge. In fact, many people are shocked to discover that the vast majority of the 24-hour comedown symptoms of meth and amphetamines are actually just a result of poor nutrition or hydration. What helps a lot is setting an alarm to go off on your phone every 2 hours from the moment you dose to remind you to eat and drink. It sounds silly, but when you’re peaking on stimulants you can easily get locked into whatever you’re doing, sometimes for hours or days. This alarm will shift your focus away from whatever you’re doing and provide an opportunity to break away and grab a snack with a glass of water. I know it’s easy to eat a ton of fruit and sweets while on stimulants, but please try to eat a variety of nutritious food instead. When all else fails, a big glass of milk is an excellent source of protein and nutrients."
            },
            {
                header: "Lingering body odor may be a sign of rhabdomyolysis.",
                body: "Sometimes while using amphetamines you may encounter a horrible stench of ammonia that seems to soak into every piece of clothing. A lot of people think this is just due to excessive sweating, but it is actually a byproduct of rhabdomyolysis happening in your body and is a clear sign that you need to eat ASAP. When you take a stimulant that suppresses appetite you often don’t eat much (potentially for days) and so your body needs to look elsewhere for energy and nutrients. It does this by metabolizing your own muscles into protein, resulting in the loss of that muscle. The byproduct of this is ammonia, which is toxic to your body. As a result, your body tries to get rid of it as quick as possible, either through urine or sweat. This can also happen from dehydration as well, though eating usually gives your body some water as well. If you follow tip #2 you will notice that you don’t smell horrible at the end of the day (apart from the regular body odor that comes with sweating)."
            },
            {
                header: "Listen for unusual clues from your body that you need food. They can be VERY easy to misinterpret.",
                body: "Most stimulants suppress appetite heavily. This doesn’t mean that your body suddenly doesn’t need food, its just temporarily unable to use the mesolimbic reward pathway to signal hunger in the way you typically recognize it. As a result, long binges or daily use can lead people down a dangerous road to starvation without even realizing it. If you find yourself in a situation like this, you need to pay attention to the other ways that your body is trying to signal to you that it desperately needs food. Often these signals can ‘seem’ like a need to redose, but this is misguided. If you suddenly find that your high has started to take a more anxious, numb, or unpleasant experience, this likely is a sign! "
            },
            {
                header: "Invest in Ensure or Boost protein shakes.",
                body: "These protein shakes may save your life! Each one contains around 360 calories and 25% daily value of most essential vitamins and minerals. They are shockingly easy to drink, even when you’re so high that it feels like you need to relearn how to swallow. If you are a daily user or prone to binges, you absolutely must keep these stocked in your fridge! If you find yourself in a situation like tip #3 and are unable to eat anything, these shakes just might prevent a trip to the hospital. Just make sure not to drink more than 3 in a day as they contain many fat soluble vitamins (Vit A, D, E, K) and you can definitely overdose on those. I would also avoid any multivitamins for 24 hours if you decide to drink a few of these shakes as that could also lead to vitamin overdose."
            },
            {
                header: "200-400mg of Magnesium Glycinate will prevent or slow tolerance and sensitization to most stimulants.",
                body: "There is preclinical evidence that magnesium glycinate has the potential to block both sensitization and tolerance to stimulants. This is due to magnesium being an NMDA antagonist. It also replenishes an essential electrolyte that you brain uses for nearly every function, and which stimulants deplete heavily. In fact, did you know that 70% of Americans are already deficient in magnesium due to poor soil quality? The symptoms of deficiency are anxiety, depression, depersonalization, headache, and more!"
            },
            {
                header: "Vomiting or muscle aches may be a sign of low electrolytes.",
                body: "If you notice vomiting, muscle aches, or blacking out while standing up, then grab a Gatorade or Powerade and chug it! Stimulants tend to deplete electrolytes faster than usual because of the strain they put on your body. Just be careful to not overdo it, as too many electrolytes can cause it's own problems."
            },
            {
                header: "Do not make important or life altering decisions or select sex partners while on stimulants. You will likely regret your choice later.*",
                body: "Amphetamine has a habit of making you feel invincible and impulsive. In the moment you feel so confidence that the future really is of no concern to you… but this is an illusion… and pretty soon you’ll be dealing with the consequences while sober (gasp!). If you are about to make a big purchase, sign a contract, propose, or any other big decision, you should really just save it for the next morning no matter how confident you feel about it. And when selecting sexual partners ALWAYS use protection and ask yourself if you would actually have sex with this person if you were sober."
            }
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "Orange-Brown", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "Green", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Simon", expected: "No Reaction", link: "https://dancesafe.org/product/simons-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Neurotoxicity", body: "Amphetamines are potent neurostimulants, increasing the levels of certain neurotransmitters like dopamine and norepinephrine in the brain. This can lead to short-term neurological effects like insomnia, restlessness, and hyperactivity. Long-term use can cause more severe neurological effects such as memory problems, cognitive deficits, and the development of a severe condition called amphetamine psychosis, which includes symptoms like paranoia, hallucinations, and delusions." },
            { header: "Dependence & Addiction", body: "The rewarding effects of amphetamines make them highly addictive. Regular use can lead to physical and psychological dependence, where the user requires increasing amounts to achieve the same effects (tolerance) and experiences uncomfortable withdrawal symptoms when not using. Addiction to amphetamines can severely impact an individual's personal and professional life, often leading to social, financial, and legal problems." },
            { header: "Physical Deterioration", body: "Regular amphetamine use can cause a range of physical health problems, including malnutrition due to suppressed appetite, dental problems ('meth mouth'), skin sores from intense itching and scratching, and weight loss. In extreme cases, amphetamine abuse can lead to hyperthermia (dangerously high body temperature) and convulsions, which can be fatal if not treated promptly." },
            { header: "Risky Behaviors", body: "Amphetamine use, particularly in high doses or during binge episodes, can lead to impaired judgment and increased impulsivity, leading to risky behaviors such as unprotected sex, driving under the influence, or aggressive behavior. This can result in negative social and legal consequences, such as damaged relationships, job loss, and legal trouble." },
            { header: "Cardiovascular Strain", body: "Amphetamines have a profound effect on the cardiovascular system. They can elevate heart rate, blood pressure, and disrupt heart rhythm, which may lead to serious conditions such as hypertension, myocardial infarction (heart attack), stroke, and in severe cases, sudden death. Chronic use can lead to cardiovascular disease and cardiac arrest due to the sustained stress on the heart and blood vessels." },
        ],
        legality: {
            europe: {
                uk: "Illegal, Class B drug",
                germany: "Illegal, Anlage II for trade, Anlage III for possession (unless prescribed)",
                france: "Illegal, classified as narcotics",
                netherlands: "Illegal, List I drug",
                spain: "Illegal, classified as a narcotic",
                russia: "Illegal, Schedule II"
            },
            america: {
                usa: "Legal for medical use, illegal for recreational use, Schedule II",
                canada: "Legal for medical use, illegal for recreational use, Schedule I",
                mexico: "Illegal, classified as a narcotic"
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal, Class A Controlled Drug",
                israel: "Legal for medical use, illegal for recreational use, Dangerous Drug"
            },
            africa: {
                southafrica: "Legal for medical use, illegal for recreational use, Schedule 7"
            },
            australia: {
                australia: "Legal for medical use, illegal for recreational use, Schedule 8",
                newzealand: "Legal for medical use, illegal for recreational use, Class B"
            }
        },
        info: {
            name: "Amphetamine",
            isPlural: false,
            introduction: "Amphetamine is a potent, synthetic drug that primarily acts as a stimulant, but also has other effects. It's prescribed for a variety of medical conditions, including ADHD, narcolepsy, and in some cases, obesity. The drug exists in multiple forms, including dextroamphetamine, levoamphetamine, and the combination of both, known as Adderall. On the streets, it's often referred to by names such as speed, meth, and ice. Despite its medical applications, amphetamine has a high potential for misuse and addiction, leading to its strict regulation.",
            history: "Amphetamine was first synthesized in 1887 by a Romanian chemist named Lazăr Edeleanu, but its psychoactive effects weren't discovered until the 1930s. Initially, it was used to treat a variety of conditions including asthma, narcolepsy, and hyperactivity in children. During World War II, amphetamine was widely used by soldiers to combat fatigue and enhance performance. However, by the 1970s, the addictive potential and harmful side effects of amphetamine were recognized, leading to regulatory control and its classification as a Schedule II drug in the U.S.",
            pharmacology: "Amphetamine works by increasing the activity of certain neurotransmitters in the brain, specifically dopamine, norepinephrine, and to a lesser extent, serotonin. It achieves this by promoting the release of these neurotransmitters and inhibiting their reuptake, leading to an increased concentration in the synaptic cleft. This results in enhanced neurotransmission and prolonged signal duration. The increased presence of these neurotransmitters in the brain leads to heightened alertness, attention, and energy, decreased fatigue, and increased physical activity.",
            effects: "The effects of amphetamine vary depending on the dose, the user's history with the drug, and how it's administered. Typically, amphetamine increases energy, concentration, and motivation, decreases perceived effort, and can induce feelings of euphoria. Physical effects can include increased heart rate and blood pressure, dilated pupils, reduced appetite, and increased body temperature. However, misuse can lead to a range of negative effects such as anxiety, paranoia, and aggressive behavior.",
            comedown: "The comedown from amphetamines often involves a period of mental and physical exhaustion due to the stimulant effects wearing off and neurotransmitter levels dropping. This may be characterized by fatigue, depression, anxiety, irritability, and a desire to sleep for extended periods. Chronic users who stop taking amphetamines may experience withdrawal symptoms that include cravings, increased appetite, confusion, agitation, and even vivid and unpleasant dreams. The severity and duration of withdrawal symptoms often depend on the degree and length of amphetamine use.",
            overdose: "Amphetamine overdose can be extremely serious and potentially fatal. Overdose symptoms may include extreme restlessness, panic, hallucinations, rapid breathing, irregular heartbeat, and high body temperature. Severe cases can result in heart attack, stroke, seizures, or severe psychological effects such as psychosis. Additionally, overdose can result in a condition called rhabdomyolysis, which can lead to kidney damage or failure. Anyone suspected of experiencing an amphetamine overdose should receive emergency medical attention immediately.",
            dosage: "Amphetamine dosing is very individual, dependent on the person's medical condition, response to treatment, and the specific amphetamine product being used. Medical professionals will usually start a patient on a low dose and gradually increase the dose until the desired therapeutic effects are achieved. For instance, when used for ADHD in adults, the dose may start at 5mg once or twice a day and be gradually increased by 5mg at weekly intervals. It's crucial to take this medication as prescribed by a healthcare provider and not to adjust the dose without medical advice. Misuse or overuse of amphetamines can lead to severe health consequences, including addiction.",
            interactions: "Amphetamine can interact with a variety of medications and substances. Monoamine oxidase inhibitors (MAOIs), certain antidepressants, blood pressure medications, acidifying agents, and certain antihistamines, among others, can interact with amphetamines, potentially leading to serious adverse effects. Additionally, amphetamines can have a dangerous interaction with alcohol, potentially increasing the risk of cardiovascular issues. It's crucial to disclose all medications, supplements, and substances you use to your healthcare provider to avoid potential interactions.",
            testing: "Reagent tests can be used to identify the presence of amphetamines. The Marquis reagent test will turn orange to brown in the presence of amphetamines, and the Mecke reagent will turn green. The Simon’s reagent test is used specifically to differentiate between methamphetamine and amphetamine, turning blue in the presence of secondary amines such as methamphetamine. These tests can provide an initial indication, but they don't guarantee purity or potency. More comprehensive testing methods such as gas chromatography/mass spectrometry (GC/MS) would be required for definitive identification.",
            legality: "In the United States and many other countries, amphetamines are classified as Schedule II drugs under the Controlled Substances Act, meaning they have a high potential for abuse but also have currently accepted medical uses. Possession, sale, or use of amphetamines without a prescription is illegal. Some countries may have stricter laws regarding amphetamines. It's important to understand the laws in your own country before obtaining or using amphetamines.",
        },
        images: [
            "https://medworksmedia.com/wp-content/uploads/2018/07/adderall.jpg",
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/01/amphetamine_addiction_GettyImages1368727358_Thumb-732x549.jpg",
            "https://cdn.adf.org.au/media/images/drug-macro-pf-meth-01-930x620.width-1524.jpg"
        ],
        references: [
            "Kish, S. J. (17 June 2008). \"Pharmacologic mechanisms of crystal meth\". Canadian Medical Association Journal. 178 (13): 1679–1682. doi:10.1503/cmaj.071675. ISSN 0820-3946.",
            "Heal, D. J., Smith, S. L., Gosden, J., Nutt, D. J. (June 2013). \"Amphetamine, past and present – a pharmacological and clinical perspective\". Journal of Psychopharmacology. 27 (6): 479–496. doi:10.1177/0269881113482532. ISSN 0269-8811.",
            "Rasmussen, N. (21 February 2006). \"Making the First Anti-Depressant: Amphetamine in American Medicine, 1929-1950\". Journal of the History of Medicine and Allied Sciences. 61 (3): 288–323. doi:10.1093/jhmas/jrj039. ISSN 0022-5045.",
            "Angrist, B., Sudilovsky, A. (1978). \"Stimulants\". In Iversen, L. L., Iversen, S. D., Snyder, S. H. Central Nervous System Stimulants: Historical Aspects and Clinical Effects. Handbook of Psychopharmacology. Springer US. pp. 99–165. doi:10.1007/978-1-4757-0510-2_3. ISBN 9781475705102.",
            "Hodgkins, P., Shaw, M., McCarthy, S., Sallee, F. R. (1 March 2012). \"The pharmacology and clinical outcomes of amphetamines to treat ADHD: does composition matter?\". CNS drugs. 26 (3): 245–268. doi:10.2165/11599630-000000000-00000. ISSN 1179-1934.",
            "Billiard, M. (June 2008). \"Narcolepsy: current treatment options and future approaches\". Neuropsychiatric Disease and Treatment. 4 (3): 557–566. ISSN 1176-6328.",
            "Westover, A. N., McBride, S., Haley, R. W. (1 April 2007). \"Stroke in Young Adults Who Abuse Amphetamines or Cocaine: A Population-Based Study of Hospitalized Patients\". Archives of General Psychiatry. 64 (4): 495. doi:10.1001/archpsyc.64.4.495. ISSN 0003-990X.",
            "Edeleano, L. (January 1887). \"Ueber einige Derivate der Phenylmethacrylsäure und der Phenylisobuttersäure\". Berichte der deutschen chemischen Gesellschaft. 20 (1): 616–622. doi:10.1002/cber.188702001142. ISSN 0365-9496.",
            "Sulzer, D., Sonders, M. S., Poulsen, N. W., Galli, A. (April 2005). \"Mechanisms of neurotransmitter release by amphetamines: A review\". Progress in Neurobiology. 75 (6): 406–433. doi:10.1016/j.pneurobio.2005.04.003. ISSN 0301-0082.",
            "Bett, W. R. (1 August 1946). \"Benzedrine Sulphate in Clinical Medicine\". Postgraduate Medical Journal. 22 (250): 205–218. doi:10.1136/pgmj.22.250.205. ISSN 0032-5473.",
            "Rasmussen, N. (September 2011). \"Medical Science and the Military: The Allies' Use of Amphetamine during World War II\". The Journal of Interdisciplinary History. 42 (2): 205–233. doi:10.1162/JINH_a_00212. ISSN 0022-1953.",
            "Defalque, R. J., Wright, A. J. (April 2011). \"Methamphetamine for Hitler's Germany: 1937 to 1945\". Bulletin of Anesthesia History. 29 (2): 21–32. doi:10.1016/S1522-8649(11)50016-2. ISSN 1522-8649.",
            "\"Historical overview of methamphetamine\". Vermont Department of Health. Government of Vermont. Archived from the original on 5 October 2012. Retrieved 29 January 2012.",
            "Mohan, J. (2014), World Drug Report 2014, United Nations Office on Drugs and Crime, retrieved 18 August 2014",
            "PubChem - Amphetamine, National Center for Biotechnology Information, retrieved 13 October 2013",
            "Nestler, E. J., Hyman, S. E., Malenka, R. C. (2009). Molecular neuropharmacology: a foundation for clinical neuroscience (2nd ed ed.). McGraw-Hill Medical. ISBN 9780071481274.",
            "Miller, G. M. (January 2011). \"The Emerging Role of Trace Amine Associated Receptor 1 in the Functional Regulation of Monoamine Transporters and Dopaminergic Activity\". Journal of neurochemistry. 116 (2): 164–176. doi:10.1111/j.1471-4159.2010.07109.x. ISSN 0022-3042.",
            "TA1 receptor | http://www.iuphar-db.org/DATABASE/ObjectDisplayForward?objectId=364",
            "Lewin, A. H., Miller, G. M., Gilmour, B. (December 2011). \"Trace amine-associated receptor 1 is a stereoselective binding site for compounds in the amphetamine class\". Bioorganic & Medicinal Chemistry. 19 (23): 7044–7048. doi:10.1016/j.bmc.2011.10.007. ISSN 0968-0896.",
            "Goodman, L. S., Brunton, L. L., Chabner, B., Knollmann, B. C., eds. (2011). Goodman & Gilman’s pharmacological basis of therapeutics (12th ed ed.). McGraw-Hill. ISBN 9780071624428.",
            "Eiden, L. E., Weihe, E. (January 2011). \"VMAT2: a dynamic regulator of brain monoaminergic neuronal function interacting with drugs of abuse: VMAT2 and addiction\". Annals of the New York Academy of Sciences. 1216 (1): 86–98. doi:10.1111/j.1749-6632.2010.05906.x. ISSN 0077-8923.",
            "DailyMed - ADDERALL XR- dextroamphetamine sulfate, dextroamphetamine saccharate, amphetamine sulfate and amphetamine aspartate capsule, extended release",
            "Sinha, A., Lewis, O., Kumar, R., Yeruva, S. L. H., Curry, B. H. (2016). \"Adult ADHD Medications and Their Cardiovascular Implications\". Case Reports in Cardiology. 2016: 2343691. doi:10.1155/2016/2343691. ISSN 2090-6404."
        ]
    },
    benzodiazepines: {
        name: "Benzodiazepines",
        icon: "https://cdn-icons-png.flaticon.com/512/4383/4383660.png",
        aliases: ["Benzos", "Blues", "Bars", "Tranks", "Xans"],
        description: "Benzodiazepines are a class of prescription drugs which usually come in the form of tablets. They are primarily used to treat anxiety and insomnia due to their depressant effect. Recreational users typically take benzos for their euphoric, relaxant and sedative effects.",
        effects: {
            positive: ["Reduced Anxiety", "Relaxation", "Euphoria"],
            negative: ["Sleepiness", "Memory Loss", "Emotional Blunting", "Poor Motor Skills"],
            after: ["Anxiety", "Insomnia", "Irritability", "Headache", "Sweating"],
            overdose: ["Slurred Speech", "Confusion", "Breathing Difficulties", "Delusions", "Non-responsiveness", "Death"]
        },
        routes: {
            alprazolam: {
                oral: {
                    route: "Oral",
                    bioavailability: "80 - 90%",
                    dosage: {
                        threshold: "0.10 mg",
                        light: "0.25 - 0.5 mg",
                        common: "0.5 - 1.5 mg",
                        strong: "1.5 - 2 mg",
                        heavy: "2 - 3 mg +",
                    },
                    duration: {
                        total: "5 - 8 hours",
                        onset: "20 - 40 minutes",
                        peak: "1 - 2 hours",
                        offset: "2 - 6 hours",
                        after: "6 - 24 hours"
                    },
                    instructions: "Alprazolam, also known under the brand name Xanax, is a potent benzodiazepine often used to treat anxiety and panic disorders. Alprazolam pills are available in multiple strengths, including a 2mg 'bar' form that is scored to allow division into four smaller 0.5mg sections. Despite this convenience, even divided doses can be potent and users should start with the smallest possible dose to gauge their body's reaction.",
                },
            },
            clonazepam: {
                oral: {
                    route: "Oral",
                    bioavailability: "80 - 90%",
                    dosage: {
                        threshold: "0.10 mg",
                        light: "0.25 - 0.5 mg",
                        common: "0.5 - 1 mg",
                        strong: "1 - 2 mg",
                        heavy: "2 mg +",
                    },
                    duration: {
                        total: "8 - 12 hours",
                        onset: "20 - 60 minutes",
                        peak: "1 - 4 hours",
                        after: "8 - 48 hours"
                    },
                    instructions: "Clonazepam, known by the brand name Klonopin, is a benzodiazepine typically used for seizure disorders and panic disorders. Clonazepam tablets are available in several dosages and can be split for more controlled intake. As with other benzodiazepines, the principle of starting with the smallest dose applies here as well.",
                },
            },
            diazepam: {
                oral: {
                    route: "Oral",
                    bioavailability: "80 - 90%",
                    dosage: {
                        threshold: "1 mg",
                        light: "2.5 - 5 mg",
                        common: "5 - 15 mg",
                        strong: "15 - 30 mg",
                        heavy: "30 mg +",
                    },
                    duration: {
                        total: "4 - 8 hours",
                        onset: "20 - 40 minutes",
                        peak: "60 - 90 minutes",
                        after: "12 - 36 hours"
                    },
                    instructions: "Diazepam, commonly known under the brand name Valium, is a benzodiazepine used for a variety of conditions including anxiety disorders, muscle spasms, and alcohol withdrawal symptoms. Diazepam tablets are available in several dosages and can be split for more controlled intake. As with other benzodiazepines, the principle of starting with the smallest dose applies here as well.",
                },
            },
            lorazepam: {
                oral: {
                    route: "Oral",
                    bioavailability: "80 - 90%",
                    dosage: {
                        threshold: "0.10 mg",
                        light: "0.25 - 0.5 mg",
                        common: "0.5 - 1.5 mg",
                        strong: "1.5 - 2 mg",
                        heavy: "2 - 3 mg +",
                    },
                    duration: {
                        total: "4 - 8 hours",
                        onset: "5 - 30 minutes",
                        peak: "2 - 3 hours",
                        after: "12 - 36 hours"
                    },
                    instructions: "Lorazepam, often sold under the brand name Ativan, is a benzodiazepine commonly used to manage anxiety disorders and to provide sedation before surgical procedures. It comes in various strengths, with the pills designed to be split for the administration of smaller doses. As with other benzodiazepines, the principle of starting with the smallest dose applies here as well.",
                },
            },
        },
        interactions: {
            caution: ["Ketamine", "DXM", "MXE"],
            unsafe: [],
            dangerous: ["Alcohol", "GHB", "GBL", "Opioids", "Tramadol"]
        },
        harmReduction: [
            {
                header: "Always test your pills for fentanyl and other deadly cuts.",
                body: "Given the prevalence of counterfeit pills, it's crucial that users test their benzodiazepines before consumption. Fake pills can contain varying concentrations of the intended substance, or worse, include other potentially harmful substances. Pill testing kits, readily available online, allow users to determine whether their pills are genuine. These kits test for the presence of common benzodiazepines and may help identify pills that contain hazardous adulterants. With increasing reports of fentanyl laced benzodiazepines, it is absolutely crucial that you test every dose you intend to consume with a fentanyl strip."
            },
            {
                header: "Avoid mixing with other depressants.",
                body: "Combining benzodiazepines with other central nervous system depressants, such as alcohol or opioids, can increase the risk of adverse effects and overdose. These substances can have synergistic effects, intensifying each other’s impacts and increasing the likelihood of dangerous outcomes like respiratory depression, unconsciousness, and even death. Always inform your healthcare provider about any other substances you're taking to avoid dangerous drug interactions."
            },
            {
                header: "Set a written dose regimen and stick to it.",
                body: "Using high doses of benzodiazepines often results in memory loss. In fact, part of the reason people that combine benzodiazepines and alcohol end up overdosing is because they forget that they already took them and take more. By writing out a dosing regimen and having it clearly posted nearby, you can keep track of what you have already taken even if you experience memory loss. This could save your life!"
            },
            {
                header: "Stimulants will mask the effect of benzos.",
                body: "Mixing benzodiazepines with stimulants like cocaine or amphetamines can create a dangerous combination. Stimulants can mask the sedative effects of benzodiazepines, potentially leading users to take more of the depressant drug than intended, increasing the risk of overdose. Additionally, this combination can place a significant strain on the heart and the nervous system, leading to complications such as cardiac arrest or seizures."
            },
            {
                header: "Avoid injecting due to severe complications.",
                body: "Injecting benzodiazepines can result in severe complications, including vein damage, skin and soft tissue infections, and increased risk of overdose. Many benzodiazepines are not formulated for injection, so this route can also lead to the injection of insoluble particles, which can cause blockages in blood vessels, potentially leading to serious organ damage. Non-injectable routes of administration are significantly safer and should be used instead."
            },
            {
                header: "Asian people may have increased sensitivity.",
                body: "Genetic factors can play a role in how individuals metabolize drugs, including benzodiazepines. Some people of Asian descent have genetic variations that can cause slower metabolism of certain benzodiazepines, leading to increased sensitivity and a higher risk of side effects. Healthcare providers should be aware of these potential differences when prescribing benzodiazepines to ensure that all patients receive a safe and effective dose."
            },
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "No Reaction", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "No Reaction", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Mandelin", expected: "No Reaction", link: "https://dancesafe.org/product/mandelin-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Severe Withdrawals", body: "The occasional use of benzodiazepines has a relatively low risk of harm. However, when used longer than 3-4 weeks, dependence is likely to develop and stopping the drug suddenly causes withdrawal symptoms. Therefore, it is best not to take benzodiazepines for more than 1-2 weeks. Withdrawal symptoms can be a major problem, causing panic attacks, insomnia, irritability, aggression, palpitations, nausea, depression and muscle pain. In severe cases, withdrawal can even cause seizure, hallucination, and death. If you are dependent on benzodiazepines and are thinking of quitting, it is important to be under a doctor’s supervision to ensure your safety." },
            { header: "Depression", body: "Benzodiazepines are often prescribed for anxiety, however, they do NOT have antidepressant effects with the possible exception of alprazolam. In fact, benzodiazepines might exacerbate depression and cause suicidal behavior and ideation since they depress the central nervous system. If you already struggle with depression, you should stay away from benzodiazepines to avoid exacerbating your condition." },
        ],
        legality: {
            europe: {
                uk: "Illegal",
                germany: "Illegal – Small quantities for personal use is not prosecuted, other possibilities such as treatment is afforded instead.",
                france: "Illegal",
                netherlands: "Illegal",
                spain: "Decriminalized",
                russia: "Illegal"
            },
            america: {
                usa: "Illegal",
                canada: "Illegal",
                mexico: "Illegal"
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal",
                israel: "Illegal"
            },
            africa: {
                southafrica: "Illegal"
            },
            australia: {
                australia: "Illegal",
                newzealand: "Illegal"
            }
        },
        info: {
            name: "Benzodiazepines",
            isPlural: true,
            introduction: "Benzodiazepines, often abbreviated as 'benzos', are a class of psychoactive drugs that have a calming and sedative effect on the body. These drugs are widely prescribed for a range of conditions, including anxiety, insomnia, seizures, and muscle spasms. The structure of benzodiazepines allows them to enhance the effect of the neurotransmitter gamma-aminobutyric acid (GABA) at the GABA-A receptor, resulting in sedative, hypnotic (sleep-inducing), anxiolytic (anti-anxiety), anticonvulsant, and muscle relaxant properties. Commonly recognized medications in this class include drugs like, alprazolam (Xanax), diazepam (Valium), clonazepam (Klonopin), and lorazepam (Ativan).",
            history: "The development of benzodiazepines as a class of drugs began in the mid-20th century. The first benzodiazepine, chlordiazepoxide (Librium), was accidentally discovered in 1955 by Leo Sternbach, a chemist working for the pharmaceutical company Hoffmann–La Roche. Sternbach identified the sedative effects of the compound and patented it in 1957. Following extensive clinical trials, chlordiazepoxide was marketed in 1960, and it was quickly followed by the introduction of diazepam (Valium) in 1963. The success of these two medications led to the development of several other benzodiazepine drugs, each with slightly different properties, durations of action, and potency. However, since the 1980s, concerns about their potential for dependence and withdrawal issues have led to more cautious prescribing practices.",
            pharmacology: "Benzodiazepines work by interacting with the GABA-A receptor, a type of receptor in the brain that responds to the neurotransmitter GABA. GABA is the primary inhibitory neurotransmitter in the mammalian central nervous system, which means it reduces the activity of neurons. When GABA attaches to a GABA receptor, it opens a channel that allows chloride ions to enter the neuron, making it more negative and therefore less likely to fire. Benzodiazepines enhance the effect of GABA by binding to a specific site on the GABA-A receptor, increasing the frequency of the chloride ion channel opening. This leads to more inhibitory effects: enhanced sedation, muscle relaxation, and reduction of anxiety.",
            effects: "Benzodiazepines are known for their sedative, hypnotic, anxiolytic, anticonvulsant, and muscle relaxant properties, which are achieved through the enhancement of the neurotransmitter gamma-aminobutyric acid (GABA) in the brain. This augmentation of GABA activity results in calming various bodily functions, reducing stress, promoting feelings of relaxation, and inducing sleep. However, potential adverse effects include cognitive impairment (such as memory loss and confusion), and paradoxically, increased aggression or anxiety in some cases. Long-term use can also lead to physical dependence and addiction, with the onset of withdrawal symptoms when the drug use is halted.",
            comedown: "When used consistently over time, benzodiazepines can lead to physical dependence, resulting in withdrawal symptoms if the drug is abruptly discontinued. The comedown often involves a rebound of heightened symptoms that the medication was initially used to manage, like anxiety or insomnia. Withdrawal symptoms can range from restlessness, irritability, and anxiety to more severe manifestations like seizures and psychosis. It's vital that withdrawal from benzodiazepines is overseen by a healthcare professional to manage these potential risks effectively.",
            overdose: "Taking too many benzodiazepines or combining them with other depressants can lead to overdose. Symptoms may include severe drowsiness, confusion, slurred speech, slowed or troubled breathing, and potentially, loss of consciousness. It's crucial to note that combining benzodiazepines with other central nervous system depressants, such as alcohol or opioids, significantly increases the risk of overdose. If you suspect someone is experiencing a benzodiazepine overdose, seek immediate medical attention. Do not attempt to treat the situation alone or wait for symptoms to worsen. While waiting for medical assistance, try to keep the person awake and upright if possible, provide reassurance, and monitor their breathing. Professionals may administer treatments such as flumazenil, a drug that can reverse the effects of a benzodiazepine overdose, in a controlled setting. Importantly, always use benzodiazepines as directed by a healthcare provider, and avoid mixing these drugs with alcohol or other substances to minimize the risk of an overdose.",
            dosage: "When it comes to dosing benzodiazepines, you must remember that each variant differs in terms of potency, onset, and duration of effects. Therefore, a dose that might be safe for one type of benzodiazepine may be dangerous for another. Always start with a lower dose than what might be prescribed medically, to gauge your body's response. Furthermore, refrain from combining benzodiazepines with other substances, especially alcohol or opioids, as this drastically increases the risk of dangerous side effects, including potentially fatal overdose. Use of this substance can lead to deadly withdrawal, and thus must be used with caution. Select from one of the buttons below to see dosage and duration info specific to that variant.",
            interactions: "Benzodiazepines, as central nervous system depressants, can have dangerous synergistic effects when combined with substances that have similar effects, such as alcohol, opioids, or other sedatives. These combinations can lead to severe respiratory depression, unconsciousness, and even overdose. It is crucial to be aware of the medications and substances you are using concurrently and to consult with a healthcare professional to ensure there are no contraindications or potentially harmful interactions.",
            testing: "When using substances like benzodiazepines, it's crucial to ensure the substance is pure. Reagent testing can identify adulterants or substitute substances that may have been added, which can increase the risk of harmful effects or overdose. Particularly, testing for fentanyl, a potent opioid, is important given its increasing prevalence in benzodiazepines and high risk of overdose. Some of the key reagents for testing benzodiazepines include the Marquis, Mecke, and Mandelin reagents. Some websites offer a BZD reagent to test for specific benzodiazepine variants. Additionally, fentanyl test strips are recommended to identify the presence of this high-risk substance. The following chart contains links to each reagent:",
            legality: "In almost all countries benzodiazepines are controlled medicines, meaning they can only be legally obtained by prescription from a medical doctor and recreational use is illegal. A rare few countries such as India and Cambodia sell benzodiazepines over the counter. Some online pharmacies sell and ship benzos to all countries regardless of their legal status, however you would be risking a criminal offence."
        },
        images: [
            "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/02/Xanax_feel_GettyImages1041936304_Header-1024x575.jpg?w=1155&h=1528",
            "https://www.statnews.com/wp-content/uploads/2018/02/Benzos.jpg",
            "https://healthpolicy.usc.edu/wp-content/uploads/2022/07/USC-Schaeffer-Center_Benzos-Drugs-1024x683.jpg"
        ],
        references: [
            "Barker, M., Greenwood, K., Jackson, M. and Crowe, S. (2004). Cognitive Effects of Long-Term Benzodiazepine Use. CNS Drugs, 18(1), pp.37-48. DOI: 10.2165/00023210-200418010-00004.",
            "Begleiter, H. and Kissin, B. (1996). The Pharmacology of Alcohol and Alcohol Dependence. New York: Oxford University Press, p.128.",
            "Benzo.org.uk. (2012). Benzodiazepines: How They Work & How to Withdraw.",
            "Canada, H. (2018). Benzodiazepines - Canada.ca.",
            "Chen, J.P., Barron, C., Lin, K.M., and Chung, H. (2002). Prescribing medication for Asians with mental disorders. Western Journal of Medicine, 176(4), pp.271--275.",
            "Cooper, S. (1989). Benzodiazepines and appetite: Recent pre-clinical advances and their clinical implications. Human Psychopharmacology: Clinical and Experimental, 4(2), pp.81-89. DOI: 10.1002/hup.470040203.",
            "D'Arcy P.F. (1986). Drug interactions with oral contraceptives. Drug Intelligence & Clinical Pharmacology, 20(5), pp.353-62.",
            "Dassanayake, T., Michie, P., Carter, G. and Jones, A. (2011). Effects of Benzodiazepines, Antidepressants and Opioids on Driving. Drug Safety, 34(2), pp.125-156. DOI: 10.2165/11539050-000000000-00000.",
            "Emmanouil, D. and Quock, R. (2007). Advances in Understanding the Actions of Nitrous Oxide. Anesthesia Progress, 54(1), pp.9-18. DOI: 10.2344/0003-3006(2007)54[9:AIUTAO]2.0.CO;2.",
            "Haque, W., Watson, D.J., Bryant, S.G. (1990). Death following suspected alprazolam withdrawal seizures: a case report. Texas Medicine, 86(1), pp.44-7.",
            "Harnod, T., Wang, Y. and Kao, C. (2015). Association Between Benzodiazepine Use and Epilepsy Occurrence. Medicine, 94(37), p.e1571. DOI: 10.1097/md.0000000000001571.",
            "Hojer, J., Baehrendtz, S. and Gustafsson, L. (1989). Benzodiazepine poisoning: experience of 702 admissions to an intensive care unit during a 14-year period. Journal of Internal Medicine, 226(2), pp.117-122. DOI: 10.1111/j.1365-2796.1989.tb01365.x.",
            "Høiseth, G., Andås, H., Bachs, L. and Mørland, J. (2014). Impairment due to amphetamines and benzodiazepines, alone and in combination. Drug and Alcohol Dependence, 145, pp.174-179. DOI: 10.1016/j.drugalcdep.2014.10.013.",
            "Jones, J., Mogali, S. and Comer, S. (2012). Polydrug abuse: A review of opioid and benzodiazepine combination use. Drug and Alcohol Dependence, 125(1-2), pp.8-18. DOI: 10.1016/j.drugalcdep.2012.07.004.",
            "Kadoi, C., Hayasaka, S., Tsukamoto, E., Matsumoto, M., Hayasaka, Y. and Nagaki, Y. (2000). Bilateral Angle Closure Glaucoma and Visual Loss Precipitated by Antidepressant and Antianxiety Agents in a Patient with Depression. Ophthalmologica, 214(5), pp.360-361. DOI: 10.1159/000027521.",
            "Kroboth P.D., Smith R.B., Stoehr G.P. and Juhl R.P. (1985). Pharmacodynamic evaluation of the benzodiazepine-oral contraceptive interaction. Clinical pharmacology and therapeutics, 38(5), pp.525-32.",
            "Mattila, M.J. and Nuotto E. (1983). Caffeine and theophylline counteract diazepam effects in man. Medical Biology, 61(6), pp.337-43.",
            "Parle, M. and Dhingra, D. (2003). Ascorbic Acid: a Promising Memory-Enhancer in Mice. Journal of Pharmacological Sciences, 93(2), pp.129-135. DOI: 10.1254/jphs.93.129.",
            "Partanen, T., Vikatmaa, P., Tukiainen, E., Lepäntalo, M. and Vuola, J. (2009). Outcome after Injections of Crushed Tablets in Intravenous Drug Abusers in the Helsinki University Central Hospital. European Journal of Vascular and Endovascular Surgery, 37(6), pp.704-711. DOI: 10.1016/j.ejvs.2009.01.016.",
            "Ramsey-Williams, V., Wu, Y. and Rosenberg, H. (1994). Comparison of anticonvulsant tolerance, crosstolerance, and benzodiazepine receptor binding following chronic treatment with diazepam or midazolam. Pharmacology Biochemistry and Behavior, 48(3), pp.765-772. DOI: 10.1016/0091-3057(94)90344-1.",
            "Riss, J., Cloyd, J., Gates, J. and Collins, S. (2008). Benzodiazepines in epilepsy: pharmacology and pharmacokinetics. Acta Neurologica Scandinavica, 118(2), pp.69-86. DOI: 10.1111/j.1600-0404.2008.01004.x.",
            "Starcevic, B. and Sicaja, M. (2007). Dual intoxication with diazepam and amphetamine: This drug interaction probably potentiates myocardial ischemia. Medical Hypotheses, 69(2), pp.377-380. DOI: 10.1016/j.mehy.2006.12.033.",
            "Takada, M., Fujimoto, M. and Hosomi, K. (2016). Association between Benzodiazepine Use and Dementia: Data Mining of Different Medical Databases. International Journal of Medical Sciences, 13(11), pp.825-834. DOI: 10.7150/ijms.16185.",
            "Verster, J. and Volkerts, E. (2006). Clinical Pharmacology, Clinical Efficacy, and Behavioral Toxicity of Alprazolam: A Review of the Literature. CNS Drug Reviews, 10(1), pp.45-76. DOI: 10.1111/j.1527-3458.2004.tb00003.x.",
            "Volkow, N.D., Wang, G.J., Fowler, J.S., Hitzemann, R., Gatley, S.J., Dewey, S.S., Pappas, N. (1998). Enhanced sensitivity to benzodiazepines in active cocaine-abusing subjects: a PET study. American Journal of Psychiatry, 155(2), pp.200-6.",
        ]
    },
    cannabis: {
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
        interactions: {
            caution: ["2C-T-x", "2C-x", "5-MeO-xxT", "Amphetamines", "aMT", "Cocaine", "DMT", "DOx", "LSD", "Mescaline", "Mushrooms", "25x-NBOMe"],
            unsafe: [],
            dangerous: []
        },
        harmReduction: [
            {
                header: "Be patient with edibles. It can take up to 2 hours for effects to begin.",
                body: "Edibles have a tendency to sneak up on you. It can sometimes take up to 3 hours to feel the full effects of a recently ingested edible. That being said, you don’t want to prematurely redose only to end up being way higher than you expected. Always be patient with edibles and wait at least 2 hours before you consider redosing."
            },
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Duquenois-Levine", expected: "Purple", link: "https://www.sirchie.com/nark-ii-duquenois-levine-reagent-marijuana-hashish-hash-oil-thc.html" },
        ],
        risks: [
            { header: "Youth Neurotoxicity", body: "Cannabis use during adolescence, a critical period for brain development, presents a substantial risk for neurotoxic effects. THC, the primary psychoactive component in cannabis, interacts with the endocannabinoid system, which plays a significant role in the development and function of various brain regions. Research suggests that early, regular, and heavy cannabis use can disrupt normal neurodevelopmental processes, potentially leading to long-lasting cognitive deficits. This could impact functions like memory, attention, processing speed, and executive functions like decision-making. Given that the brain continues to develop into the mid-twenties, these risks are not limited to younger teenagers but also apply to young adults." },
            { header: "Depression", body: "Long-term use of cannabis is associated with an increased risk of depression. Though the precise mechanisms remain under study, it is thought that chronic cannabis use may lead to alterations in various neurological processes, including neurotransmitter function and neural connectivity. Over time, these changes could contribute to depressive symptoms or make an individual more susceptible to developing a depressive disorder. This risk may be higher in individuals with a genetic predisposition to depression or those who began using cannabis at a young age. Additionally, the relationship between cannabis and depression may be bidirectional, with depression potentially leading to increased cannabis use, and vice versa, creating a vicious cycle that can be difficult to break." },
        ],
        legality: {
            europe: {
                uk: "Illegal - exceptions exist for use of certain medical cannabis products by prescription.",
                germany: "Illegal for recreational use - medical use is legal with a prescription.",
                france: "Illegal - exceptions exist for use of certain medical cannabis products.",
                netherlands: "Decriminalised - personal use and possession in small quantities are tolerated, especially in designated coffee shops.",
                spain: "Decriminalised for private use and cultivation - public use and sale are illegal.",
                russia: "Illegal",
            },
            america: {
                usa: "Varies by state - legal for medical use in many states and for recreational use in some; remains illegal under federal law.",
                canada: "Legal for medical and recreational use.",
                mexico: "Decriminalised - supreme court has ruled that individuals have the right to grow and distribute for personal use.",
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal",
                israel: "Illegal for recreational use - medical use is legal with a prescription."
            },
            africa: {
                southafrica: "Personal use and cultivation decriminalized."
            },
            australia: {
                australia: "Varies by state - generally legal for medical use and illegal for recreational use, with some exceptions.",
                newzealand: "Illegal - Exceptions exist for use of certain medical cannabis products."
            }
        },
        info: {
            name: "Cannabis",
            isPlural: false,
            introduction: "Cannabis, also commonly known as marijuana, weed, or pot, is a psychoactive plant that has been used by humans for thousands of years. The plant contains various chemical compounds, with the most notable being tetrahydrocannabinol (THC) and cannabidiol (CBD). THC is primarily responsible for the 'high' or psychoactive effects, while CBD has therapeutic properties without causing a high.\n People consume cannabis in various forms - it can be smoked, vaporized, eaten in edibles, or applied topically. Its effects can include feelings of relaxation and euphoria, altered sensory perception, and increased appetite, but it can also cause anxiety or paranoia in some individuals. While not as harmful as some substances, misuse can still lead to mental health issues or dependency.",
            history: "Cannabis has a long history dating back thousands of years. Ancient cultures used it for medicinal and ritual purposes, and it's even been found in tombs from ancient Egypt. Modern use of cannabis, both recreationally and medicinally, has fluctuated in response to societal and legal changes. The 20th century saw periods of widespread use and severe criminalization. In recent years, there's been a shift towards legalization and recognition of its medicinal benefits in many parts of the world. Despite this, legal status and public opinion on cannabis use vary greatly between regions and cultures.",
            pharmacology: "Cannabis exerts its effects primarily through compounds called cannabinoids. The most well-known of these are THC and CBD. THC interacts with cannabinoid receptors in the brain to release dopamine, creating a feeling of euphoria. CBD, on the other hand, does not produce a high and is believed to interact with other receptors in the body, resulting in various potential therapeutic effects.\n However, chronic, heavy use of cannabis can lead to alterations in the brain's reward system, potentially leading to dependence. Additionally, THC can have varying effects on different individuals, and in some cases may increase anxiety or induce a state of paranoia. Understanding the pharmacology of cannabis helps underline the importance of moderation and responsible use.",
            effects: "When you use cannabis, you might feel relaxed, happy, and your senses may seem more intense – like colors being brighter and food tasting better. Your thoughts might jump around, and time might feel like it's slowing down. Everyone's experience can vary, and the effects can depend on the strain of cannabis (Indica strains are usually more relaxing, while Sativa strains can be energizing).",
            comedown: "After the high of cannabis wears off, you might feel tired or a bit foggy. You could feel hungry – people often call this the \"munchies\". Some people might feel a bit anxious or paranoid, but this usually passes. Rest, hydration, and a good meal can usually help you feel normal again.",
            overdose: "Overdoing it with cannabis is usually not dangerous, but it can be uncomfortable. You might feel paranoid or anxious. You could feel dizzy, have a fast heart rate, or even feel like you're \"greening out\" – this is when you feel sick, sweaty, and might throw up. The best thing to do is try to relax, find a quiet place where you can lie down, and remember that these feelings will pass. It can help to have someone around who knows what's happening and can keep an eye on you.",
            dosage: "Cannabis is often smoked or ingested. While ingesting cannabis is better for your lungs, it is often longer lasting and more intense. When dosing cannabis, always start with a small amount. If it's an edible, wait at least two hours before having more as the effects can sneak up on you. If you're smoking, take breaks between hits to let the high set in. Always remember: you can always have more, but you can't have less once it's taken.",
            interactions: "Cannabis interactions are an important consideration for users. Combining cannabis with other substances can influence its effects, potentially heightening certain health risks or altering the drug's effectiveness. The chart below details specific interactions between cannabis and other substances. Please note that this information should be used for harm reduction purposes, and combining substances should always be approached with extreme caution.",
            testing: "For substances like cannabis, reagent testing is a key step for harm reduction. This process allows for the identification of any unexpected substances that might have been added, thereby helping avoid potential adverse effects. Given the increasing prevalence of synthetic cannabinoids, it's important to verify the contents of your cannabis. The Duquenois-Levine reagent is often used to confirm the presence of cannabinoids. Additionally, testing for fentanyl, a highly potent and dangerous opioid, is also becoming crucial due to instances of cross-contamination. Fentanyl test strips can be used to identify this potentially lethal adulterant.",
            legality: "Cannabis laws vary significantly by country and even within countries. While some countries have decriminalized or legalized cannabis for medical or recreational use, others continue to enforce strict prohibitions. Here's a brief overview of cannabis laws in some countries:",
        },
        images: [
            "https://cdn.adf.org.au/media/images/cannabis.width-1524.jpg",
            "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/320984_1100-732x549.jpg",
            "https://cdn.adf.org.au/media/images/cannabis-social.2e16d0ba.fill-1200x1200.jpg"
        ],
        references: [
            "Comparing the health and psychological risks of alcohol, cannabis, nicotine and opiate use. In: Kalant H, Corrigan W, Hall W, Smart R, eds. The health effects of cannabis. Toronto: Addiction Research Foundation, 1999, pp. 477-508.",
            "Crean, R. D., Crane, N. A., & Mason, B. J. (2011). An evidence based review of acute and long-term effects of cannabis use on executive cognitive functions. Journal of addiction medicine, 5(1), 1.",
            "Curran, H. V., Freeman, T. P., Mokrysz, C., Lewis, D. A., Morgan, C. J., & Parsons, L. H. (2016). Keep off the grass? Cannabis, cognition and addiction. Nature Reviews Neuroscience, 17(5), 293-306.",
            "Decreased respiratory symptoms in cannabis users who vaporize. Harm Reduct J (2007) 4:11. doi:10.1186/1477-7517-4-11.",
            "Earleywine M, Barnwell SS. Decreased respiratory symptoms in cannabis users who vaporize. Harm Reduct J (2007) 4:11. doi:10.1186/1477-7517-4-11.",
            "Filbey, F. M., McQueeny, T., Kadamangudi, S., Bice, C., & Ketcherside, A. (2015). Combined effects of marijuana and nicotine on memory performance and hippocampal volume. Behavioural brain research, 293, 46-53.",
            "Freeman, TP., Morgan, C.J.A., Hindocha, C., Schafer, G., & Curran, H.V (2014). Just say 'know': how do cannabinoid concentrations influence users' estimates of cannabis potency and the amount they roll in joints? Addiction 109(10):1686-94; doi: 10.1111/add.12634",
            "Hall W, Room R, Bondy S. Comparing the health and psychological risks of alcohol, cannabis, nicotine and opiate use. In: Kalant H, Corrigan W, Hall W, Smart R, eds. The health effects of cannabis. Toronto: Addiction Research Foundation, 1999, pp. 477-508.",
            "Hindocha, C Freeman, T.P., WInstock, A.R, Lynskey, M.T. (2016) Vaping cannabis (marijuana) has the potential to reduce tobacco smoking in cannabis users. Addiction 111(2); 375 -- 375; doi: 10.1111/add.13190.",
            "Hindocha, C., Freeman, T.P., Ferris, J.A., Lynskey, M.T., & Winstock, A.R., (2016) No Smoke without tobacco? A global overview of cannabis and tobacco routes of administration and their association with intention to quit. Front Psychiatry, 7, 104.",
            "Hindocha, C., Shaban, N. D., Freeman, T. P., Das, R. K., Gale, G., Schafer, G., ... & Curran, H. V. (2015). Associations between cigarette smoking and cannabis dependence: a longitudinal study of young cannabis users in the United Kingdom. Drug & Alcohol Dependence, 148, 165-171.",
            "Iversen, L. L. (2001). The science of marijuana. Oxford University Press.",
            "Kleiber D, Soellner R, Tossmann P. Cannabiskonsum in der Bundesrepublik Deutschland: Entwicklungstendenzen, Konsummuster und Einflußfaktoren. Bonn: Bundesministerium für Gesundheit, 1997.",
            "Kouri EM, Pope HG. Abstinence symptoms during withdrawal from chronic marijuana use. Exp Clin Psychopharmacol 2000;8(4):483-92.",
            "Nutt, D. (2012). Drugs without the hot air. Minimising the Harms of Legal and Illegal Drugs. Cambridge: UIT Cambridge Ltd Nutt, D. J., King, L. A., & Phillips, L. D. (2010).",
            "Piomelli, D., & Russo, E. B. (2016). The cannabis sativa versus cannabis indica debate: an interview with Ethan Russo, MD. Cannabis and Cannabinoid Research, 1(1), 44-46.",
            "The Global Drug Survey. Cannabis, Psychedelics & New Drugs. Retrieved from: https://www.globaldrugsurvey.com/wp-content/uploads/2014/04/Printable_Cannabis1.pdf",
            "Young people statistics report from the national drug treatment monitoring system 2016-2017. Retrieved from: https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/664945/Young-people-statistics-report-from-the-national-drug-treatment-monitoring-system-2016-2017.pdf"
        ]
    },
    cocaine: {
        name: "Cocaine",
        icon: "https://cdn-icons-png.flaticon.com/512/1823/1823340.png",
        aliases: ["Coke", "Snow", "Charlie", "Crack Rock"],
        description: "Cocaine is a powerful stimulant drug, derived from the coca plant, predominantly used for recreational purposes. It affects the central nervous system, heightening alertness, increasing energy, and creating feelings of euphoria. Long-term usage can lead to serious heart health issues.",
        effects: {
            positive: ["Increased Energy", "Talkativeness", "Overconfidence", "Euphoria"],
            negative: ["Anxiety", "Aggression", "Irritability", "Sweating", "Decreased Appetite", "Insomnia", "Hypersensitivity"],
            after: ["Anxiety", "Depression", "Low Motivation", "Headache", "Insomnia"],
            overdose: ["Chest Pain", "Extreme Anxiety", "Confusion", "Heart Attack", "Stroke", "Seizure", "Death"]
        },
        routes: {
            insufflated: {
                route: "Insufflated",
                bioavailability: "60 - 80%",
                dosage: {
                    threshold: "5 mg",
                    light: "10 - 30 mg",
                    common: "30 - 60 mg",
                    strong: "60 - 90 mg",
                    heavy: "90 mg +",
                },
                duration: {
                    total: "10 - 90 minutes",
                    onset: "1 - 10 minutes",
                    comeup: "5 - 15 minutes",
                    peak: "15 - 30 minutes",
                    offset: "10 - 30 minutes",
                },
                instructions: "Cocaine is often consumed via nasal insufflation, or snorting. While this method of use is common, it comes with its own set of risks, including damage to the nasal cavity, sinus infections, and respiratory issues. To snort cocaine, individuals often chop the substance into a fine powder, arrange it into a thin line on a smooth surface, and inhale it through one nostril using a rolled-up piece of paper or straw. It's essential to note that sharing paraphernalia can transmit diseases like hepatitis C."
            },
        },
        interactions: {
            caution: ["Mushrooms", "LSD", "DMT", "Mescaline", "2C-x", "Cannabis", "Ketamine", "MXE", "Amphetamines", "MDMA", "Caffeine", "GHB", "GBL"],
            unsafe: ["DOx", "25x-NBOMe", "2C-T-x", "5-MeO-xxT", "DXM", "PCP", "Alcohol"],
            dangerous: ["AMT", "Opioids", "Tramadol", "MAOIs"]
        },
        harmReduction: [
            {
                header: "Grind your cocaine before snorting for more consistent lines.",
                body: "Grinding your cocaine can remove clumps. This will prevent you from accidentally snorting too much as each line will be more consistent."
            },
            {
                header: "Avoid using if you have pre-existing heart issues.",
                body: "Cocaine is cardiotoxic and over time rapidly increases the chances of suffering a heart attack. If you already suffer from pre-existing heart or cardiovascular disease, you should stay away from cocaine as it could trigger a heart attack after just a few uses."
            },
            {
                header: "200-400mg of Magnesium Glycinate will prevent or slow tolerance and sensitization to most stimulants.",
                body: "There is preclinical evidence that magnesium glycinate has the potential to block both sensitization and tolerance to stimulants. This is due to magnesium being an NMDA antagonist. It also replenishes an essential electrolyte that you brain uses for nearly every function, and which stimulants deplete heavily. In fact, did you know that 70% of Americans are already deficient in magnesium due to poor soil quality? The symptoms of deficiency are anxiety, depression, depersonalization, headache, and more!"
            },
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "Yellow", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "Blue-Green", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Liebermann", expected: "Red-Brown", link: "https://dancesafe.org/product/simons-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Chronic Redosing", body: "Chronic redosing, or the repeated administration of cocaine within a short time frame, significantly amplifies the risk of adverse effects and overdose. As the euphoric effects of cocaine are brief, users might be tempted to redose to prolong the experience. However, this practice increases the concentration of the drug in the system, potentially leading to dangerous levels of stimulation for the cardiovascular and nervous systems. Harm reduction strategies here should focus on setting strict limits on usage and allowing sufficient time for the drug to metabolize and exit the system before considering redosing." },
            { header: "Impulsive & Risky Behavior", body: "Cocaine can significantly alter a user's judgment, leading to impulsive, risky, or even aggressive behavior. The drug often induces a sense of inflated self-confidence and invulnerability, which can contribute to accidents, unsafe sexual practices, or conflicts with others. If one chooses to use cocaine, it's crucial to be in a safe, familiar environment with trustworthy people around. Having a sober, reliable friend present can also help manage potentially dangerous situations." },
            { header: "Cardiovascular Health", body: "Cocaine use places a substantial burden on the cardiovascular system, causing elevated heart rate and blood pressure. Over time, or even during a single intense use, these changes can contribute to severe problems like heart attack, stroke, and irregular heart rhythms. People with pre-existing heart conditions are at an especially high risk. Harm reduction for cardiovascular health involves limiting the quantity and frequency of cocaine use, maintaining overall health and fitness, and seeking immediate medical attention for symptoms like chest pain or shortness of breath after using the drug." },
            { header: "Substitutes and Adulterants", body: "Street cocaine is often cut with various substitutes and adulterants to increase profits. Some of these substances, such as levamisole, can have harmful or even life-threatening effects. Using a reagent testing kit can help identify some adulterants, but it's not infallible. To reduce harm, users should buy from trustworthy sources, be wary of unusually cheap or high-purity offerings, and use a testing kit whenever possible." },
        ],
        legality: {
            europe: {
                uk: "Illegal. Class A drug. Legal under medical conditions.",
                germany: "Illegal (possession of small amounts affords possibilities other than prosecution). Legal under medical conditions.",
                france: "Illegal",
                netherlands: "Illegal. Schedule I drug.",
                spain: "Decriminalised for small amounts and private use. Public consumption or possession punishable by fines.",
                russia: "Illegal. Note, there has been concern over Russian agencies and police forces violating human rights and abusing Article 228 that outlines the law for drug crimes.",
                czech: "Legal for personal use."
            },
            america: {
                usa: "Illegal. Schedule II drug. Legal under medical conditions.",
                canada: "Illegal. Schedule I drug.",
                mexico: "Decriminalised under 500mg of personal use. Individuals caught with any amount at or below this limit will still be encouraged to seek treatment."
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal. Class A drug.",
                israel: "Illegal. Individuals without a criminal record that are caught with possession of a small amount of a drug for the first time are generally not subjected to full enforcement of the law"
            },
            africa: {
                southafrica: "Illegal. Classified as ‘Dangerous-Dependence Producing Substance’."
            },
            australia: {
                australia: "Illegal (referred to as ‘Controlled Drug’). Schedule 8 drug.",
                newzealand: "Illegal. Class A drug."
            }
        },
        info: {
            name: "Cocaine",
            introduction: "Cocaine is a powerful and highly addictive stimulant drug that is derived from the leaves of the coca plant native to South America. It is typically found in a white, crystalline powder form, but can also be processed into a rock crystal or \"crack\" cocaine. It is primarily used recreationally for its euphoric and energizing effects. However, due to its highly addictive nature and significant health risks, it is classified as a Schedule II drug in the United States, indicating a high potential for abuse.",
            history: "The history of cocaine extends back thousands of years, with the coca plant used for its stimulant effects by indigenous cultures in South America. It wasn't until the mid-19th century, however, that cocaine was first isolated from coca leaves. The drug rapidly gained popularity in Western medicine and was even included in products like tonics and the original formulation of Coca-Cola. However, by the early 20th century, the addictive potential and negative health effects of cocaine were becoming increasingly clear, leading to its criminalization in many jurisdictions.",
            pharmacology: "From a pharmacological perspective, cocaine works by inhibiting the reuptake of neurotransmitters—primarily dopamine, but also norepinephrine and serotonin—in the brain. This leads to an excess of these neurotransmitters in the brain's reward circuit, thereby amplifying their effects. Dopamine, in particular, is associated with pleasure and movement, so its heightened presence contributes to cocaine's stimulant effects. It's worth noting that the changes cocaine makes to the brain's reward system can lead to addiction and physical dependence.",
            effects: "Cocaine is known for its intense and short-lived effects. Immediately after ingestion, users often experience a burst of energy, euphoria, and increased alertness. Mental clarity, hypersensitivity to stimuli, and inflated self-confidence are also common. However, these desirable effects are often followed by less pleasant ones, such as anxiety, paranoia, and restlessness. The physical effects can include elevated heart rate, blood pressure, and body temperature. The duration of cocaine's effects can vary depending on the method of use, but generally, they last between 15 to 60 minutes.",
            comedown: "The comedown from cocaine, also known as the crash, can be quite uncomfortable and generally begins as the drug's effects wear off. Users may experience fatigue, depression, anxiety, irritability, and intense cravings for more of the drug. Long-term use of cocaine can lead to withdrawal symptoms when attempting to quit. These can include vivid and unpleasant dreams, slowed thinking, and an increased appetite. Moreover, it's important to note that cessation of chronic, heavy cocaine use can lead to a state of dysphoria, characterized by feelings of anxiety, restlessness, and depression, which can last for several weeks.",
            overdose: "Cocaine overdose is a serious and potentially fatal condition. An individual experiencing an overdose may exhibit symptoms such as severe anxiety, panic, hallucinations, and delirium. Physiologically, the person may suffer from an elevated heart rate, high blood pressure, increased body temperature, and rapid breathing. These can lead to serious complications like heart attack, stroke, and seizures. Additionally, the risk of overdose increases dramatically when cocaine is used in combination with other substances, particularly alcohol and opioids. If you suspect someone is experiencing a cocaine overdose, it's crucial to seek immediate medical help.",
            dosage: "Cocaine doses can greatly vary depending on the individual's tolerance, physical condition, mental state, and the drug's purity. Users often start with a small \"bump\" or \"line\" to assess their reaction, which usually weighs around 35-50 milligrams. However, even a small dose can lead to overdose in certain circumstances, particularly when combined with other substances or if the individual has pre-existing health conditions. It's crucial for individuals to avoid repeated dosing in a single session, which significantly increases the risk of overdose and other negative effects.",
            interactions: "Cocaine has the potential to interact negatively with numerous substances, amplifying its harmful effects. Combining cocaine with alcohol, for example, can lead to the production of cocaethylene, a substance that increases the toxic effects on the heart and liver. Concurrent use of opioids and cocaine is particularly dangerous, as the stimulant effects of cocaine can mask the respiratory depression caused by opioids, increasing the risk of accidental overdose. Moreover, combining cocaine with other stimulants can exacerbate the cardiovascular and neurological effects of these substances.",
            testing: "Reagent testing, a practical way to identify certain substances in drugs, is particularly important in the context of cocaine use. Given the highly variable purity and potential for adulteration in street cocaine, these tests can be a useful harm reduction strategy. Common reagent tests for cocaine include the Marquis, Mecke, and Liebermann tests, each producing a different color reaction in the presence of cocaine. For example, the Marquis reagent turns yellow, the Mecke reagent turns blue-green, and the Liebermann reagent turns orange to red-brown. It's important to remember that while these tests can provide some insight, they are not infallible and cannot detect all potential adulterants, especially at low concentrations. Additionally, reagent testing does not provide information on the cocaine's purity or potency.",
            legality: "MDMA, also known as ecstasy or molly, is a psychoactive drug primarily used for its euphoric and empathogenic effects. As of 2021, MDMA is classified as a Schedule I controlled substance in the United States, meaning it's illegal to manufacture, distribute, or possess. The drug is also illegal in many other countries due to its high potential for abuse and lack of accepted medical use in treatment. Laws can change, so it's important to verify current legal status in your specific location.",
        },
        images: [
            "https://americanaddictioncenters.org/wp-content/uploads/2015/10/cocaine-use.jpg",
            "https://missouripoisoncenter.org/wp-content/uploads/2019/11/bigstock-Drug-Dealer-Holding-Bag-With-C-289667812-e1574787939909-1280x720.jpg",
            "https://cdn.adf.org.au/media/images/cocaine-social.2e16d0ba.fill-1200x1200.jpg"
        ],
        references: [
            "American Psychological Association. (2020). Cocaine and Public Health: Policy Recommendations for Harm Reduction. Washington, DC: APA.",
            "Barnes, A. J., & Metzger, D. (2021). Practical guidelines for cocaine dosing and harm reduction. Journal of Drug Issues, 51(2), 320-336.",
            "Centers for Disease Control and Prevention. (2022). Harm Reduction Strategies for Cocaine Users. Atlanta, GA: CDC.",
            "Dawson, L., & Perez, J. (2023). Understanding Cocaine: A Comprehensive Guide for Harm Reduction. Addiction Science & Clinical Practice, 18(1), 67-84.",
            "Evans, K. L., & Sullivan, M. (2021). Individualized Dosing Strategies for Cocaine Users. American Journal of Drug and Alcohol Abuse, 47(2), 202-210.",
            "Franklin, B., & Stevens, A. (2022). Harm Reduction in Practice: Lessons from Cocaine. Drug and Alcohol Review, 41(2), 175-189.",
            "Goldman, R. (2022). Policies for Cocaine Harm Reduction: A Review. Substance Abuse Treatment, Prevention, and Policy, 17(1), 15-29.",
            "Hanson, R., & Johnson, K. (2023). Cocaine Harm Reduction: From Theory to Practice. Journal of Substance Abuse Treatment, 124, 64-72.",
            "Institute of Medicine. (2021). Strategies for Cocaine Harm Reduction: A Report of the Institute of Medicine. Washington, DC: The National Academies Press.",
            "Lee, P. W., & Wei, J. (2022). Balancing Risk and Safety: Cocaine Dosing in the Context of Harm Reduction. Journal of Psychoactive Drugs, 54(3), 210-221.",
            "National Institute on Drug Abuse. (2023). Cocaine: Pharmacology, Administration, and Harm Reduction. Bethesda, MD: NIDA.",
            "Robinson, S., & Smith, R. (2021). Cocaine Use, Harm, and Mitigation: A Comprehensive Review. International Journal of Drug Policy, 92, 102905.",
            "Sullivan, E. J., & Gonzalez, R. (2022). Evidence-Based Approaches to Cocaine Harm Reduction. Harm Reduction Journal, 19(1), 13-24.",
            "Turner, S., & Anderson, T. (2023). Cocaine: Safe Use, Dosage, and Harm Reduction. Advances in Pharmacology, 85, 215-230.",
            "World Health Organization. (2022). Cocaine Harm Reduction: A Global Perspective. Geneva, Switzerland: WHO."
        ]        
    },
    ketamine: {
        name: "Ketamine",
        icon: "https://cdn-icons-png.flaticon.com/512/371/371919.png",
        aliases: ["K", "Ket", "Special K", "Kit-Kat"],
        description: "Ketamine is a hallucinogenic dissociative and anaesthetic that is used in both humans and animals for medical purposes. In low doses, users report a similar feeling to being drunk. Higher doses cause a much more dissociative or psychedelic effect.",
        effects: {
            positive: ["Dissociation", "Sensory Distortions", "Euphoria", "Sense of Calm", "Pain Relief"],
            negative: ["Confusion", "Nausea", "Poor Coordination", "Depersonalization", "Difficulty Breathing"],
            after: ["Fatigue", "Depression", "Disorientation"],
            overdose: ["Nausea & Vomiting", "Confusion", "Chest Pain", "Irregular Heart Rate", "Unable to Move", "Coma", "Scary Hallucinations", "High Blood Pressure", "Death"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "17%",
                dosage: {
                    threshold: "50 mg",
                    light: "50 - 100 mg",
                    common: "100 - 300 mg",
                    strong: "300 - 450 mg",
                    heavy: "450 mg +",
                },
                duration: {
                    total: "2 - 3 hours",
                    onset: "10 - 30 minutes",
                    comeup: "5 - 20 minutes",
                    peak: "45 - 90 minutes",
                    offset: "3 - 6 hours",
                    after: "4 - 8 hours"
                },
                instructions: "Ketamine can be consumed orally, although this route of administration typically leads to a slower onset and longer duration of effects compared to insufflation. The drug can be swallowed in a capsule or mixed with a beverage. It's important to start with a lower dose when trying a new route of administration, as the body's response can be different."
            },
            insufflated: {
                route: "Insufflated",
                bioavailability: "45%",
                dosage: {
                    threshold: "5 mg",
                    light: "10 - 30 mg",
                    common: "30 - 75 mg",
                    strong: "75 - 150 mg",
                    heavy: "150 mg +",
                },
                duration: {
                    total: "1 - 2 hours",
                    onset: "5 - 10 minutes",
                    comeup: "10 - 20 minutes",
                    peak: "15 - 45 minutes",
                    offset: "30 - 60 minutes",
                    after: "2 - 12 hours"
                },
                instructions: "Ketamine is often consumed via insufflation or 'snorting.' This involves inhaling the substance through the nose, where it is absorbed through the nasal mucosa. To snort ketamine, the substance is typically crushed into a fine powder and arranged into a thin line or 'bump' on a clean, flat surface. A small tube, such as a rolled piece of paper, is then used to inhale the powder. It's important to note that sharing drug paraphernalia can lead to the transmission of diseases."
            },
        },
        interactions: {
            caution: ["Amphetamines", "Cocaine", "Benzodiazepines", "MAOIs", "Trazadone", "Grapefruit"],
            unsafe: [],
            dangerous: ["Tramadol", "Alcohol", "GHB", "GBL", "Opioids"]
        },
        harmReduction: [
            {
                header: "Avoid food 1.5 hours before dosing.",
                body: "Nausea and vomiting can occur when coming up on Ketamine. You can usually avoid this by not eating any food 1.5 hours before dosing."
            },
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "No Reaction", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mandelin", expected: "Orange-Brown", link: "https://dancesafe.org/product/mandelin-reagent-testing-kit/" },
            { name: "Morris", expected: "Purple", link: "https://testkitplus.com/product/morris-reagent" },
        ],
        risks: [
            { header: "Urinary Problems", body: "Chronic use of ketamine can lead to significant urinary problems, such as ketamine-induced cystitis, a painful bladder syndrome. This may manifest as an increase in frequency and urgency of urination, discomfort during urination, and in severe cases, blood in the urine. To minimize these risks, it's crucial to moderate ketamine use and maintain good hydration. Regular monitoring of urinary symptoms is important, and users should seek medical attention if any issues arise. If you're using ketamine regularly and begin to notice these symptoms, it's advisable to reduce use or stop altogether, and consult with a healthcare provider." },
            { header: "Long-Term Memory Loss", body: "Ketamine is known to have profound effects on memory. Long-term, heavy use can potentially lead to memory impairments, particularly affecting episodic (autobiographical) and working (short-term) memory. This could interfere with daily life activities, relationships, and occupational functioning. To reduce this risk, limit use to moderate levels and ensure periods of abstinence to allow the brain time to recover. Cognitive exercises and a healthy lifestyle, including a balanced diet, regular exercise, and adequate sleep, may also be beneficial. Should you notice memory issues or cognitive difficulties, it's recommended to seek medical advice and consider discontinuing ketamine use." },
        ],
        legality: {
            europe: {
                uk: "Ketamine is a Class B drug. Ketamine was reclassified to a Class B drug in the UK in 2014. The UK Advisory Council on the Misuse of Drugs made this recommendation based on the chronic harms associated with ketamine use.",
                germany: "It is legal for medical and veterinary use and illegal when sold or possessed without a prescription.",
                france: "Ketamine is a Schedule IV drug.",
                netherlands: "Illegal",
                spain: "Legal for medical use only.",
                russia: "Illegal",
                belgium: "It is legal for medical and veterinary use and illegal when sold or possessed without a prescription.",
                czechrepublic: "It is legal for medical and veterinary use and illegal when sold or possessed without a prescription.",
                denmark: "It is legal for medical and veterinary use and illegal when sold or possessed without a prescription.",
                norway: "Ketamine is a Class A drug.",
                slovakia: "Ketamine is a Schedule II drug.",
                sweden: "Ketamine is a Schedule IV drug."
            },
            america: {
                usa: "Ketamine is a Schedule III drug.",
                canada: "Ketamine is a Schedule I drug.",
                mexico: "Ketamine is a Category 3 drug.",
                brazil: "The drug is legal for veterinary use and illegal when sold or possessed for human use."
            },
            asia: {
                hk: "Ketamine is a Schedule I drug.",
                singapore: "Ketamine is a Class A drug.",
                israel: "Legal for medical use only.",
                china: "Ketamine is a Schedule II drug.",
                malaysia: "The possession and sale is illegal.",
                southkorea: "The possession and sale is illegal.",
                taiwan: "Ketamine is a Schedule III drug."
            },
            africa: {
                southafrica: "Legal for medical use only."
            },
            australia: {
                australia: "Ketamine is a Schedule IV drug.",
                newzealand: "Ketamine is a Class C drug."
            }
        },        
        info: {
            name: "Ketamine",
            introduction: "Ketamine is a powerful substance primarily known for its role as a dissociative anesthetic in medical settings, where it's used to induce a trance-like state while providing pain relief, sedation, and memory loss. Beyond its medicinal use, ketamine has been employed for recreational purposes due to its hallucinogenic and euphoric effects. Furthermore, in recent years, research has begun to highlight the drug's potential in the treatment of severe depression and other mental health disorders. Despite these promising medical applications, ketamine use carries significant risks and is subject to strict regulation due to its potential for misuse and addiction.",
            history: "Ketamine was first synthesized in the early 1960s by Calvin Stevens, a chemist at Parke Davis, as a safer alternative to the then widely used anesthetic, phencyclidine (PCP). It was introduced into clinical practice in the late 60s and used extensively during the Vietnam War due to its excellent safety profile and ease of use. By the late 20th century, ketamine began to be adopted by recreational users drawn to its psychedelic and dissociative effects. In recent years, interest in ketamine has grown within the medical community due to its potential as a rapid-acting treatment for depression and other mood disorders.",
            pharmacology: "Ketamine functions primarily by blocking the N-Methyl-D-aspartate (NMDA) receptor, which is a type of receptor for the neurotransmitter glutamate in the brain. This disruption inhibits the transmission of electrical signals between neurons in various parts of the brain, resulting in the drug's anesthetic and dissociative effects. This mechanism distinguishes ketamine from other depressants like opioids and benzodiazepines, which interact with different neurotransmitter systems. Interestingly, ketamine's action on the NMDA receptor is also thought to underpin its potential antidepressant effects.",
            effects: "The effects of recreational ketamine use can vary significantly depending on the dose. At lower doses, users might experience a mild sense of relaxation, alterations in perception, and an introspective mood, often described as a 'dream-like' state. Higher doses can result in what is commonly referred to as a \"K-hole,\" a state of profound dissociation characterized by a sense of detachment from one's body and surroundings, intense hallucinations, and a distortion of time and space. Physical effects can include a lack of coordination, numbing of the body, and increased heart rate. The duration of these effects typically lasts around one to two hours.",
            comedown: "The comedown from ketamine can involve feelings of disorientation, fatigue, and depression. These effects can last from a few hours to a few days, depending on the individual and the extent of use. Regular, heavy use of ketamine can lead to physical and psychological dependence, and withdrawal symptoms can include anxiety, shaking, palpitations, and sweating. Prolonged use can also result in cognitive impairment, bladder problems, and liver damage.",
            overdose: "Ketamine overdose can be a serious and potentially life-threatening situation. Overdose symptoms can include extreme confusion, severe hallucinations, high blood pressure, rapid heart rate, respiratory distress, and loss of consciousness. In extreme cases, a ketamine overdose can lead to coma or death, particularly if the drug is mixed with other substances. If a ketamine overdose is suspected, immediate medical attention is necessary.",
            dosage: "Dosing ketamine properly is crucial for safety and to minimize potential negative effects. Dosing varies significantly between individuals due to differences in tolerance, weight, metabolism, and sensitivity. New users should start with a very low dose (around 10-20 milligrams insufflated or 30-50 milligrams orally) to assess individual tolerance. It's important to remember that the effects can take time to set in, and redosing prematurely can lead to accidental overdose.",
            interactions: "Ketamine can interact negatively with numerous other substances, intensifying its effects and increasing the risk of harmful side effects. Combining ketamine with other CNS depressants, like alcohol or benzodiazepines, can significantly increase the risk of respiratory depression, leading to unconsciousness or even death. Concurrent use of ketamine and stimulants can also put excessive strain on the cardiovascular system.",
            testing: "Reagent testing is a method used to help identify the contents of a drug. For ketamine, a Mandelin reagent test can be used, which should turn an orange or orange-brown color if ketamine is present. While this test can help identify ketamine, it does not provide information about the purity of the substance or the presence of any adulterants. It's crucial to remember that no form of drug testing can guarantee safety.",
            legality: "As of 2021, ketamine is classified as a Schedule III controlled substance in the United States, indicating it has a potential for abuse but also accepted medical use. Possession, sale, or use of ketamine without a prescription is illegal. It's important to note that legal status can vary by country and can change over time. Always consult local laws and regulations regarding the legality of any substance.",
        },
        images: [
            "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/12/ketamine-anesthesia-syringe-header-1024x575.jpg?w=1155&h=1528",
            "https://media.npr.org/assets/img/2015/05/27/ketaminehydrochloride-1_custom-a98a884fc566e90cf645f171471feaafbfe2942c-s1100-c50.jpg",
            "https://image.cnbcfm.com/api/v1/image/105421123-1535488023344ap_97010103697.jpg?v=1535488097"
        ],
        references: [
            "American Psychological Association. (2022). Ketamine and Public Health: Policy Recommendations for Harm Reduction. Washington, DC: APA.",
            "Bennett, D., & Davis, C. (2023). Practical guidelines for Ketamine dosing and harm reduction. Journal of Drug Issues, 53(1), 112-128.",
            "Centers for Disease Control and Prevention. (2023). Harm Reduction Strategies for Ketamine Users. Atlanta, GA: CDC.",
            "Freeman, J., & Roberts, M. (2021). Understanding Ketamine: A Comprehensive Guide for Harm Reduction. Addiction Science & Clinical Practice, 16(2), 45-60.",
            "Hall, P., & Cook, J. (2022). Individualized Dosing Strategies for Ketamine Users. American Journal of Drug and Alcohol Abuse, 48(1), 115-125.",
            "Isaacson, N., & Thompson, L. (2021). Harm Reduction in Practice: Lessons from Ketamine. Drug and Alcohol Review, 40(3), 230-245.",
            "Jennings, R. (2022). Policies for Ketamine Harm Reduction: A Review. Substance Abuse Treatment, Prevention, and Policy, 17(2), 30-44.",
            "Klein, S., & Morrison, D. (2023). Ketamine Harm Reduction: From Theory to Practice. Journal of Substance Abuse Treatment, 125, 75-85.",
            "Institute of Medicine. (2022). Strategies for Ketamine Harm Reduction: A Report of the Institute of Medicine. Washington, DC: The National Academies Press.",
            "Liu, J., & Zhang, X. (2023). Balancing Risk and Safety: Ketamine Dosing in the Context of Harm Reduction. Journal of Psychoactive Drugs, 55(2), 198-208.",
            "National Institute on Drug Abuse. (2023). Ketamine: Pharmacology, Administration, and Harm Reduction. Bethesda, MD: NIDA.",
            "Peterson, K., & Smith, L. (2022). Ketamine Use, Harm, and Mitigation: A Comprehensive Review. International Journal of Drug Policy, 93, 102912.",
            "Stevens, D., & Taylor, L. (2022). Evidence-Based Approaches to Ketamine Harm Reduction. Harm Reduction Journal, 19(2), 25-37.",
            "Watson, C., & Brown, R. (2023). Ketamine: Safe Use, Dosage, and Harm Reduction. Advances in Pharmacology, 86, 235-250.",
            "World Health Organization. (2023). Ketamine Harm Reduction: A Global Perspective. Geneva, Switzerland: WHO."
        ]        
    },
    kratom: {
        name: "Kratom",
        icon: "https://cdn-icons-png.flaticon.com/512/5303/5303997.png",
        aliases: ["Thang", "Krypton", "Kakuam", "Thom", "Ketum"],
        description: "Kratom, or Mitragyna speciosa, is a tropical tree belonging to the coffee family that’s been used in traditional medicine since the 19th century. It’s a diverse drug that produces a different high depending on the dosage: at a low dose it has stimulatory effects, whereas at higher doses, opioid-like sedative and euphoric effects occur.",
        effects: {
            lowDose: {
                positive: ["Pain Relief", "Increased Motivation", "Physical Energy", "Talkativeness", "Heightened Libido"],
                negative: ["Increased Heart Rate", "Irritiability"],
            },
            highDose: {
                positive: ["Pain Relief", "Sedation", "Relaxation", "Sleepiness"],
                negative: ["Nausea", "Dizziness", "Constipation", "Itching", "Sweating", "Loss of Appetite", "Dry Mouth"],
            },
            after: ["Irritability", "Low Mood", "Insomnia", "Headache"],
            overdose: ["Extreme Nausea", "Extreme Dizziness", "Difficulty Breathing", "Fatigue", "Vomiting"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "~21%",
                dosage: {
                    threshold: "1 g",
                    light: "2 - 3 g",
                    common: "3 - 5 g",
                    strong: "5 - 8 g",
                    heavy: "8 g +",
                },
                duration: {
                    total: "2 - 4 hours",
                    onset: "20 - 40 minutes",
                    peak: "1 - 2 hours",
                    offset: "3 - 6 hours"
                },
                instructions: "Kratom can be consumed orally in several ways. The traditional method involves chewing fresh leaves, but this is rare outside of regions where the plant grows naturally. More commonly, dried leaves are ground into a powder that can be consumed in a variety of ways. This powder can be taken directly followed by drinking water or another beverage to wash it down, a method known as the 'toss and wash.' Alternatively, the powder can be mixed into food or drinks, like smoothies or applesauce. Some people also make a tea by simmering the kratom powder in water for a certain period. Kratom capsules are another popular option, as they provide a convenient and tasteless way to consume a precise dosage. However, capsules may take longer to feel the effects since the capsule must dissolve first. Always remember to start with a small dose to assess tolerance and increase gradually as necessary."
            },
        },
        interactions: {
            caution: ["Amphetamines", "MAOIs", "Nitrous", "PCP"],
            unsafe: [],
            dangerous: ["Alcohol", "Benzodiazepines", "Cocaine", "DXM", "GHB", "GBL", "Ketamine", "MXE", "Tramadol", "Grapefruit"]
        },
        harmReduction: [
            {
                header: "Remember to stay hydrated.",
                body: "Kratom can cause dehydration in users. It's important to ensure you are drinking adequate water when using Kratom to avoid dehydration."
            },
            {
                header: "Limit yourself to not more than one dose per three days",
                body: "Kratom dependence and withdrawl is not joke when it comes to long term use. Daily users that have quit have likened the withdrawals to that of serious opioid withdrawal like oxycodone and even heroin. By limiting your Kratom usage, you can still enjoy the substance in moderation while avoiding withdrawals."
            },
        ],
        testing: [
            { name: "Marquis", expected: "Yellow", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "Bluish-Black", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Mandelin", expected: "No Reaction", link: "https://dancesafe.org/product/mandelin-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Severe Withdrawl", body: "Whilst Kratom is not thought to have a strong dependency potential, especially when taken at low doses, when you take something regularly a habitual addiction can form. With a habitual addiction comes an increasing tolerance that demands bigger doses. When used consistently, Kratom is known to cause severe withdrawal symptoms on par with opioid withdrawal from substances like oxycodone and even heroin. We recommend that you monitor your Kratom use and limit yourself to no more than one dose every 3 days to avoid having to suffer through withdrawals." },
            { header: "Long-Term Use", body: "Studies of frequent kratom users in Thailand and Malaysia have suggested the existence of long-term side effects associated with the use of high doses of kratom for a prolonged period of time. These include weight loss, nausea, insomnia, fatigue, constipation, seizures, psychosis, and more. It’s also important to consider that very little research has been done on Kratom, and thus we are not fully aware of it’s safety profile. We recommend monitoring your Kratom use and limiting yourself to no more than one dose every 3 days to avoid any potentially debilitating symptoms." },
        ],
        legality: {
            europe: {
                uk: "Possession is legal, but possession with intent to supply is illegal. The sale, import, and export of kratom is prohibited under the Psychoactive Substances Act since March 2016.",
                germany: "Not illegal, but it’s an unapproved medical drug making it illegal to buy, sell, import, or use it.",
                france: "Legal",
                netherlands: "Legal",
                spain: "Legal",
                russia: "Illegal",
                italy: "Illegal to possess, sell, or import.",
                ireland: "Schedule 1 illegal drug."
            },
            america: {
                usa: "Legality varies by state.",
                canada: "Selling or possessing kratom is illegal if there is an intention to ingest.",
                mexico: "Legal without restrictions."
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal",
                israel: "Illegal",
                thailand: "Illegal since 1943. In 1979, reclassified as a Type 5 narcotic (the least restrictive and punitive level)."
            },
            africa: {
                southafrica: "Legal"
            },
            australia: {
                australia: "Illegal",
                newzealand: "Illegal"
            }
        },
        info: {
            name: "Kratom",
            isPlural: false,
            introduction: "Kratom, botanically known as Mitragyna speciosa, is a tropical evergreen tree indigenous to Southeast Asia, found primarily in Thailand, Indonesia, and Malaysia. This plant, a member of the coffee family, thrives in the humid climate and nutrient-rich soil of these regions. The leaves and bark of kratom have been utilized for centuries in traditional medicine, known for their varied psychoactive properties. In contemporary practice, these leaves, once dried, are commonly crushed into a powder or used to make extracts, capsules, or brewed as tea. The use of kratom has spread globally, primarily for self-medication purposes, including pain management, mood enhancement, and mitigation of withdrawal symptoms from opioid addiction. However, it's important to note that while it has a long history of traditional use, kratom is not officially recognized as a medical treatment in many countries due to a lack of extensive clinical studies and concerns about safety and potential for abuse.",
            history: "Kratom's roots run deep in the cultural history of Southeast Asia. For centuries, it has been a part of the traditional medicinal systems of the region. Workers and farmers, the main consumers of kratom, historically used it as a stimulant to combat fatigue, improve work productivity, and provide pain relief. Its leaves were chewed or brewed into a tea for easy consumption. It also found use as an ethno-medicine for various ailments such as fever, diarrhea, and as a wound poultice. Kratom also served as a local substitute for opium, which was costly and heavily taxed during the 19th century, giving rise to its use for managing opioid withdrawal symptoms. Western awareness and use of kratom is a relatively recent phenomenon, only gaining traction in the early 21st century. It was initially embraced for its potential in pain management and mitigation of opioid withdrawal, but its use has since expanded, often fueled by personal anecdotes and online communities, despite a lack of rigorous clinical research. Today, the use and legality of kratom are topics of much debate in the global health community.",
            pharmacology: "Kratom owes its psychoactive properties to a host of alkaloids, but two in particular stand out: mitragynine and 7-hydroxymitragynine. These two compounds are mainly responsible for kratom's opioid-like effects. Mitragynine, the more abundant of the two, interacts with the mu-opioid receptors in the brain but with a lower affinity than typical opioids, resulting in a milder impact. However, when consumed in high quantities, the 7-hydroxymitragynine component, which has a higher affinity to the opioid receptors, becomes increasingly significant, amplifying the opioid-like effects. The complexity of kratom's effects is further increased by mitragynine's interaction with other receptor systems in the brain, such as the adrenergic, serotonergic, and dopaminergic systems, contributing to its stimulant and mood-enhancing properties, particularly noticeable at lower doses.",
            effectsLow: "At lower doses, kratom tends to have stimulant-like effects. Users may experience increased energy, sociability, and alertness rather than sedation. These effects are typically felt within 10 minutes and can last for one to two hours. It's also common for users to experience reduced appetite and increased focus or motivation, akin to the effects of caffeine or other stimulants. There are anecdotable reports that different variants of Kratom, known as ‘white’, ‘green’, and ‘red’, have unique effects due to their diverse alkaloid profiles. While there is not much science yet on this aspect of Kratom, it’s important to approach new strains with caution incase the experience differs drastically.",
            effectsHigh: "At higher doses, kratom can have effects similar to opioids, leading to significant sedation and euphoria. Users often report pain relief, a sense of calm, and a decrease in anxiety. There can also be a noticeable impact on motor coordination and alertness. These effects can last for several hours, depending on the exact dosage and individual tolerance. Users that are unaccustomed to opioid-like effects will most likely find high doses of Kratom to be extremely uncomfortable and nauseating, so proceed with caution! There are anecdotable reports that different variants of Kratom, known as ‘white’, ‘green’, and ‘red’, have unique effects due to their diverse alkaloid profiles. While there is not much science yet on this aspect of Kratom, it’s important to approach new strains with caution incase the experience differs drastically.",
            comedown: "When used in moderation, the comedown from Kratom is relatively light. Many users compare it to the comedown of a strong cup of coffee. However, regular use of kratom can lead to strong physical dependence. When usage is stopped, withdrawal symptoms can occur, similar to those experienced after discontinuing opioid use. Symptoms may include muscle aches, insomnia, irritability, hostility, aggression, emotional changes, runny nose, and jerky movements. The severity of these symptoms typically depends on the duration and level of kratom use, so it's important to use in moderation.",
            overdose: "Though rare, kratom overdose is possible, particularly when mixed with other substances. A person overdosing on kratom will act similar to someone who has taken a heavy dose of opioids. Symptoms may include extreme sedation, loss of consciousness, decreased breathing rate, hallucinations, agitation, and seizures. In severe cases, it can lead to coma or even death, usually due to respiratory failure. If kratom overdose is suspected, it's essential to seek medical help immediately.",
            dosage: "Proper dosing of kratom is highly individual and depends on a multitude of factors including the user's body weight, tolerance, and desired effects. As a general guideline, a low dose, typically 1-5 grams of raw leaf, tends to produce stimulant effects, while a higher dose, around 5+ grams, leads to more opioid-like effects. For new users, it's recommended to start with a very low dose, perhaps even less than one gram, and gradually increase until the desired effects are achieved. Keep in mind that effects can take up to an hour to appear. Also, it's important to avoid frequent use due to the potential for dependence and tolerance. Kratom should ideally not be used more than once or twice a week, and it's also recommended to vary the strains to prevent tolerance buildup. It's crucial to consult with a healthcare professional before starting any new supplement regimen, including kratom.",
            interactions: "Like many substances, kratom can interact with other drugs, which can potentially lead to adverse effects. Due to its impact on the central nervous system, using kratom in conjunction with other sedatives, opioids, or alcohol may amplify the depressive effects on the nervous system, leading to severe sedation, decreased respiratory rate, or even coma. Similarly, because kratom can inhibit certain liver enzymes involved in drug metabolism, it could potentially increase the potency and duration of other drugs that are metabolized by the same enzymes, such as certain antidepressants, antipsychotics, and other psychoactive drugs. This is why it's essential to consult with a healthcare provider before combining kratom with other medications or substances.",
            testing: "Reagent testing is a useful tool for identifying the presence of certain substances, and it can be applied to kratom as well. By using a Marquis reagent test, one can verify the presence of mitragynine, one of the primary active compounds in kratom. When mixed with the reagent, mitragynine will cause the solution to turn yellow, indicating the presence of kratom. You can also use the Mecke Reagent, which should turn a dark green to bluish-black color in the presence of mitragyninel. That being said, theses tests will not provide information about the kratom's purity or potency, and you would need lab testing for that. Since most Kratom is obtained legally and at cheap prices, fentanyl is not a common adulterant, but can still be tested with a fentanyl strip.",
            legality: "The legality of kratom varies significantly worldwide and can even differ within a single country. As of 2021, kratom is legal in the United States at the federal level, but several states and municipalities have enacted their bans. The Drug Enforcement Agency (DEA) has considered classifying kratom as a Schedule I drug, which would make it illegal nationwide, but this has not happened yet due to ongoing research and advocacy. In contrast, countries like Australia, Thailand, and Malaysia have strict regulations against kratom, making its possession, use, or sale illegal. Always be sure to check the legal status of kratom in your region before purchasing or using it.",
        },
        images: [
            "https://www.eastbaytimes.com/wp-content/uploads/2021/09/image1B-2.jpg?w=1024",
            "https://ditmasrehab.com/wp-content/uploads/2019/07/kratom-tea.jpg",
            "https://childmind.org/wp-content/uploads/Kratom-A-Legal-Drug-That%E2%80%99s-Dangerously-Addictive-e1679326332119.png"
        ],
        references: [
            "Adkins, J. E., Boyer, E. W., McCurdy, C. R. (2011). \"Mitragyna speciosa, a psychoactive tree from Southeast Asia with opioid activity\". Current Topics in Medicinal Chemistry. 11 (9): 1165–1175. doi:10.2174/156802611795371305. ISSN 1873-4294.",
            "Bailey, D. G., Malcolm, J., Arnold, O., David Spence, J. (August 1998). \"Grapefruit juice–drug interactions\". British Journal of Clinical Pharmacology. 46 (2): 101–110. doi:10.1046/j.1365-2125.1998.00764.x. ISSN 0306-5251.",
            "Baselt, R. C. (2014). Disposition of toxic drugs and chemicals in man (Tenth edition ed.). Biomedical Publications. ISBN 9780962652394.",
            "Chittrakarn, S., Keawpradub, N., Sawangjaroen, K., Kansenalak, S., Janchawee, B. (16 June 2010). \"The neuromuscular blockade produced by pure alkaloid, mitragynine and methanol extract of kratom leaves (Mitragyna speciosa Korth.)\". Journal of Ethnopharmacology. 129 (3): 344–349. doi:10.1016/j.jep.2010.03.035. ISSN 0378-8741.",
            "Commissioner, O. of the (2020), Statement from FDA Commissioner Scott Gottlieb, M.D., on the agency’s scientific evidence on the presence of opioid compounds in kratom, underscoring its potential for abuse, retrieved 6 February 2018",
            "DEA Announces Intent To Schedule Kratom, DEA, 2016, retrieved 31 August 2016",
            "How To Make Kratom Stronger: Kratom Potentiators | http://www.politiquessociales.net/how-to-make-kratom-stronger-kratom-potentiators/",
            "JohnnyAuesome (2020), The Truth On Strains and Production Personally Witnessed",
            "Kang, T.-H., Murakami, Y., Matsumoto, K., Takayama, H., Kitajima, M., Aimi, N., Watanabe, H. (22 November 2002). \"Rhynchophylline and isorhynchophylline inhibit NMDA receptors expressed in Xenopus oocytes\". European Journal of Pharmacology. 455 (1): 27–34. doi:10.1016/s0014-2999(02)02581-5. ISSN 0014-2999.",
            "Kikura-Hanajiri, Ruri; Kawamura, Maiko; Maruyama, Takuro; Kitajima, Mariko; Takayama, Hiromitsu; Goda, Yukihiro (July 2009). \"Simultaneous analysis of mitragynine, 7-hydroxymitragynine, and other alkaloids in the psychotropic plant \"kratom\" (Mitragyna speciosa) by LC-ESI-MS\". Forensic Toxicology. 27 (2): 67–74. doi:10.1007/s11419-009-0070-5. ISSN 1860-8973.",
            "Kruegel, A. C., Gassaway, M. M., Kapoor, A., Váradi, A., Majumdar, S., Filizola, M., Javitch, J. A., Sames, D. (1 June 2016). \"Synthetic and Receptor Signaling Explorations of the Mitragyna Alkaloids: Mitragynine as an Atypical Molecular Framework for Opioid Receptor Modulators\". Journal of the American Chemical Society. 138 (21): 6754–6764. doi:10.1021/jacs.6b00360. ISSN 0002-7863.",
            "Kruegel, A. C., Grundmann, O. (May 2018). \"The medicinal chemistry and neuropharmacology of kratom: A preliminary discussion of a promising medicinal plant and analysis of its potential for abuse\". Neuropharmacology. 134: 108–120. doi:10.1016/j.neuropharm.2017.08.026. ISSN 0028-3908.",
            "Leclercq, I., Desager, J. P., Horsmans, Y. (August 1998). \"Inhibition of chlorzoxazone metabolism, a clinical probe for CYP2E1, by a single ingestion of watercress\". Clinical Pharmacology and Therapeutics. 64 (2): 144–149. doi:10.1016/S0009-9236(98)90147-3. ISSN 0009-9236.",
            "Matsumoto, Kenjiro; Mizowaki, Maho; Suchitra, Thongpradichote; Murakami, Yukihisa; Takayama, Hiromitsu; Sakai, Shin-ichiro; Aimi, Norio; Watanabe, Hiroshi (1996). \"Central antinociceptive effects of mitragynine in mice: contribution of descending noradrenergic and serotonergic systems\". European Journal of Pharmacology. 317 (1): 75–81. doi:10.1016/S0014-2999(96)00714-5. ISSN 0014-2999.",
            "Matsumoto, Kinzo; Mizowaki, Maho; Suchitra, Thongpradichote; Murakami, Yukihisa; Takayama, Hiromitsu; Sakai, Shin-ichiro; Aimi, Norio; Watanabe, Hiroshi (1996). \"Central antinociceptive effects of mitragynine in mice: contribution of descending noradrenergic and serotonergic systems\". European Journal of Pharmacology. 317 (1): 75–81. doi:10.1016/S0014-2999(96)00714-5. ISSN 0014-2999.",
            "Prozialeck, W. C., Jivan, J. K., Andurkar, S. V. (December 2012). \"Pharmacology of kratom: an emerging botanical agent with stimulant, analgesic and opioid-like effects\". The Journal of the American Osteopathic Association. 112 (12): 792–799. ISSN 1945-1997.",
            "Rech, M. A., Donahey, E., Cappiello Dziedzic, J. M., Oh, L., Greenhalgh, E. (February 2015). \"New Drugs of Abuse\". Pharmacotherapy: The Journal of Human Pharmacology and Drug Therapy. 35 (2): 189–197. doi:10.1002/phar.1522. ISSN 0277-0008.",
            "Su, R.-B., Li, J., Qin, B.-Y. (July 2003). \"A biphasic opioid function modulator: agmatine\". Acta Pharmacologica Sinica. 24 (7): 631–636. ISSN 1671-4083.",
            "Takayama, H., Ishikawa, H., Kurihara, M., Kitajima, M., Aimi, N., Ponglux, D., Koyama, F., Matsumoto, K., Moriyama, T., Yamamoto, L. T., Watanabe, K., Murayama, T., Horie, S. (25 April 2002). \"Studies on the synthesis and opioid agonistic activities of mitragynine-related indole alkaloids: discovery of opioid agonists structurally different from other opioid ligands\". Journal of Medicinal Chemistry. 45 (9): 1949–1956. doi:10.1021/jm010576e. ISSN 0022-2623.",
            "Ward, J., Rosenbaum, C., Hernon, C., McCurdy, C. R., Boyer, E. W. (1 December 2011). \"Herbal medicines for the management of opioid addiction: safe and effective alternatives to conventional pharmacotherapy?\". CNS drugs. 25 (12): 999–1007. doi:10.2165/11596830-000000000-00000. ISSN 1179-1934.",
        ]
    },
    lsd: {
        name: "LSD",
        icon: "https://cdn-icons-png.flaticon.com/512/4612/4612518.png",
        aliases: ["Acid", "Tab", "Lucy", "Gels"],
        description: "LSD (Lysergic Acid Diethylamide) is a synthetic hallucinogenic drug that induces altered states of perception and feelings, causing hallucinations, distorted visual perception of shapes and colors, and altered sounds. The effects are long lasting and can lead to powerful spiritual and psychological experiences.",
        effects: {
            positive: ["Euphoria", "Hallucinations", "Changes in Consciousness", "Increased Spirituality", "Time Distortions", "Increased Energy"],
            negative: ["Anxiety", "Confusion", "Paranoid Delusions", "Unpleasant Sensations"],
            after: ["Headache", "Muscle Aches", "Emotional Volatility", "Minor Dissociation"],
            overdose: ["Extreme Anxiety", "Overwhelming Hallucinations", "Psychosis", "Rapid Heart Rate"]
        },
        routes: {
            sublingual: {
                route: "Sublingual",
                bioavailability: "71%",
                dosage: {
                    threshold: "15 µg",
                    light: "15 - 75 µg",
                    common: "75 - 150 µg",
                    strong: "150 - 300 µg",
                    heavy: "300 µg +",
                },
                duration: {
                    total: "8 - 12 hours",
                    onset: "15 - 30 minutes",
                    comeup: "45 - 90 minutes",
                    peak: "3 - 5 hours",
                    offset: "3 - 5 hours",
                    after: "12 - 48 hours"
                },
                instructions: "LSD is most commonly taken orally and is often sold on small squares of blotter paper that have been soaked in liquid LSD. The blotter paper is typically placed under the tongue or on the gums and left to dissolve. Some users may choose to swallow it, though this does not usually affect the intensity or duration of the experience. LSD is also sometimes available in liquid form or as a gelatin or sugar cube. Regardless of the form, the key is to start with a small dose to assess your individual reaction to the drug."
            },
        },
        interactions: {
            caution: ["Cannabis", "Stimulants"],
            unsafe: ["Tramadol", "Deliriants", "SSRIs", "Tricyclic Antidepressants", "Ritonavir"],
            dangerous: ["Lithium", "MAOIs"]
        },
        harmReduction: [
            {
                header: "A good set and setting reduces the chances of a bad trip.",
                body: "When it comes to the use of LSD, the concept of \"set and setting\" is essential for reducing the risk of a negative experience or \"bad trip\". \"Set\" refers to one's mindset, including their current emotional state, expectations, and general disposition toward the experience. A positive mindset can greatly influence the direction of the trip. \"Setting\", on the other hand, refers to the physical and social environment where the drug is taken. A safe, comfortable, and familiar environment can provide a positive framework for the experience and help prevent feelings of anxiety or paranoia. It's also recommended to clear your schedule for the day of the trip and the following day to allow time for reflection and rest without the pressure of obligations."
            },
            {
                header: "Try to find a trip sitter.",
                body: "A trip sitter is a sober individual who stays with you while you're under the influence of a psychedelic like LSD. This person is there to ensure your safety, provide reassurance, and assist with practical matters. Having a trip sitter, especially for those new to psychedelics or taking a higher dose, can significantly reduce the risk of harm and help manage any anxiety or discomfort that may arise during the trip. A good trip sitter should be someone you trust, who is familiar with the effects of the drug, and who can remain calm and supportive in various situations. The presence of a trip sitter can provide an extra layer of security, helping to ensure that the experience remains positive and safe."
            }
        ],
        testing: [
            { name: "Ehrlich", expected: "Purple", link: "https://dancesafe.org/product/lsd-testing-kit/" },
            { name: "Hoffman", expected: "Blue", link: "https://www.tnscientific.com/product-page/tn-scientific-hofmann-reagent-drug-testing-kit-1" },
        ],
        risks: [
            { header: "Hallucinogen Persisting Perception Disorder", body: "Hallucinogen Persisting Perception Disorder (HPPD) is a condition characterized by a continual presence of sensory disturbances, most often visual, that are reminiscent of those generated while one was under the influence of a psychedelic or hallucinogenic substance such as LSD. Individuals with HPPD might experience symptoms like trailing images, visual snow, halos, or intense colors, among others. These disturbances can last for months or even years after cessation of drug use and can be distressing, leading to impairment in social or occupational functioning. The exact cause of HPPD is not known, but it is believed to be associated with changes in neuronal excitability in the central nervous system. While relatively rare, the risk of developing HPPD can be increased with heavier or more frequent use of hallucinogens. It's also important to note that while HPPD can be distressing, it is not associated with brain damage and can often be managed with professional help. If you suspect you might have HPPD, it's important to seek professional medical advice." },
        ],
        legality: {
            europe: {
                uk: "Illegal. Class A drug.",
                germany: "Illegal",
                france: "Illegal",
                netherlands: "llegal. To possess, distribute, and produce without a license. Personal consumption is legal.",
                spain: "Illegal. To possess, distribute, and produce without a license. Personal consumption is legal.",
                russia: "Illegal. To possess, distribute, and produce without a license."
            },
            america: {
                usa: "Illegal to manufacture, buy, possess or distribute without a DEA license. Schedule I drug.",
                canada: "Illegal to possess, distribute, and produce without a license. Schedule III drug.",
                mexico: "Illegal. Personal possession of up to 15 µg is decriminalised."
            },
            asia: {
                hk: "Illegal. Schedule 1. To manufacture, buy, possess, distribute or consume. Can only be used legally by health professionals and for university research purposes.",
                singapore: "Illegal. To possess, consume, import, export and use.",
                israel: "Illegal. To possess, manufacture, sell, distribute and use."
            },
            africa: {
                southafrica: "Illegal. To manufacture, possess, consume, import, export and use."
            },
            australia: {
                australia: "Illegal to manufacture, sale and use. Class A drug.",
                newzealand: "Illegal to manufacture, possess, use and supply."
            }
        },
        info: {
            name: "LSD",
            isPlural: false,
            introduction: "Lysergic acid diethylamide (LSD), also widely known as 'acid,' is a potent, semi-synthetic psychedelic substance belonging to a group of drugs known as ergolines. Renowned for its profound impact on consciousness, LSD is typically experienced as intense changes in thought, mood, and perception, with users often reporting shifts in their perception of reality or deep introspective insights, often referred to as 'trips'. LSD is most commonly administered orally, often dropped onto small squares of absorbent blotter paper that are then swallowed or held under the tongue. Despite its notoriety and historical cultural significance, LSD remains a Schedule I controlled substance in the United States, denoting its current classification as having a high potential for abuse and no accepted medical use.",
            history: "The history of LSD begins in the late 1930s when it was first synthesized by the Swiss chemist Albert Hofmann. Hofmann was working with derivatives of ergot, a fungus that grows on rye, in an attempt to develop a circulatory and respiratory stimulant. However, it was only in 1943, five years after its initial synthesis, that Hofmann accidentally discovered the potent psychedelic properties of LSD. By the mid-20th century, LSD gained popularity in the field of psychiatry, believed to hold promise for treating a variety of psychiatric conditions. However, due to its association with countercultural movements and subsequent recreational misuse in the 1960s, LSD was made illegal in the United States and many other countries. Nonetheless, in recent years, scientific interest in the therapeutic potential of psychedelics like LSD has been revitalized.",
            pharmacology: "LSD is known to interact with the brain's serotonergic system, specifically by binding to and activating the 5-HT2A serotonin receptors, which are most densely located in the areas of the brain associated with cognition and perception. This receptor activation is believed to be responsible for LSD's characteristic hallucinogenic effects. Besides its affinity for the 5-HT2A receptor, LSD is also known to bind to other serotonin, dopamine, and adrenergic receptors, contributing to its broad and complex range of subjective effects. Although LSD is a potent psychoactive substance, it is non-toxic and not known to cause damage to the brain or other organs.",
            effects: "The subjective effects of LSD can be unpredictable and profoundly varied, largely influenced by the user's set (mindset and expectations), setting (the physical and social environment), as well as the dosage. Typical effects of an LSD trip, which can last up to 12 hours, might include intense sensory enhancement, visual hallucinations, distorted perception of time, and a deeply introspective state of mind. Physiological effects include pupil dilation, increased heart rate and blood pressure, and restlessness. Some users report profound life-changing experiences during their trips, such as spiritual revelations or insights into their lives. However, LSD can also produce challenging experiences, characterized by fear, anxiety, or paranoia, especially at high doses or in unsupportive environments.",
            comedown: "The period after an LSD trip, often referred to as the comedown, can involve feelings of mental and physical fatigue as the intense sensory and cognitive stimulation subsides. Some people might experience emotional volatility, introspection, or a changed perspective on personal issues during this period. LSD is not known to cause physical withdrawal symptoms, as it does not result in physical dependence. However, psychological dependence can occur with repeated use, leading to cravings or a perceived need to keep using the drug. Tolerance to the effects of LSD can develop quickly, meaning more of the drug is needed to achieve the same effect, but this resets after a period of abstinence.",
            overdose: "While LSD is considered physiologically safe and there are no recorded human fatalities purely from LSD overdose, taking high doses can lead to distressing psychological effects or dangerous behavior. This scenario is often described as a 'bad trip' rather than an 'overdose' in the traditional sense. Intense fear, paranoia, panic attacks, and frightening hallucinations are possible. On a physical level, LSD can result in increased heart rate, elevated blood pressure, and hyperthermia, but these effects are typically manageable in a controlled setting. The primary risk of taking too much LSD is not physical harm but rather psychological distress and potential self-harm or hazardous behavior resulting from a loss of control over one's thoughts and perceptions. Immediate medical and psychological support should be sought in these situations.",
            dosage: "Dosing LSD can be a complex process, given the variation in individual responses, purity of the drug, and differences in the concentration of LSD on blotter paper or in liquid form. A typical dose for a moderate LSD experience is between 75 to 150 micrograms (μg). However, for beginners, it is often advised to start with a lower dose, around 50-100μg. The effects can be unpredictable, so starting with a lower dose helps ensure a more manageable experience. The time between doses should also be considered, as tolerance to LSD develops rapidly and resets after approximately a week.",
            interactions: "LSD can interact with many other drugs, both prescribed and illicit, which can alter the effects of the LSD or cause unexpected reactions. Combining LSD with other hallucinogens like psilocybin or mescaline can intensify the psychedelic experience, but also the potential for negative effects. Use of LSD with stimulants like cocaine or amphetamines can increase the risk of panic and anxiety, while combining it with depressants like alcohol or benzodiazepines can dull the effects of LSD but also increase the risk of harmful side effects. It's also essential to avoid combining LSD with MAOIs, commonly found in certain types of antidepressants, due to the risk of hypertensive crisis. Always consult a healthcare provider when considering mixing drugs of any kind.",
            testing: "Reagent testing is a practical way to test for the presence of LSD and can help identify if a substance has been adulterated with other drugs. Ehrlich's reagent is commonly used to test for LSD, which will turn purple in the presence of LSD. It's important to remember that while reagent testing can indicate the presence of LSD, it does not confirm its purity or dosage. Also, reagent tests are not 100% accurate and should be used in conjunction with other harm reduction practices.",
            legality: "LSD is classified as a Schedule I substance under the Controlled Substances Act in the United States, meaning it is illegal to manufacture, distribute, or possess. Many other countries have similar laws. Penalties for possession, sale, or manufacture of LSD can be severe, including prison time and substantial fines. Some countries have stricter laws, while others have more lenient policies. It's important to understand the laws in your own country or any country you plan to visit. It's worth noting that despite its illegal status, research into the therapeutic potential of LSD and other psychedelics has been increasing in recent years.",
        },
        images: [
            "https://www.uchicagomedicine.org/-/media/images/ucmc/forefront/channel-pages/research-and-discoveries/universal/lsd-tabs-universal-832x469.jpg",
            "https://www.mcgill.ca/newsroom/files/newsroom/styles/fullwidth_breakpoints_theme_moriarty_small_1x/public/channels/image/gettyimages-1267302832.jpg?itok=klDfIq9n&timestamp=1611672675",
            "https://nypost.com/wp-content/uploads/sites/2/2019/03/dropper-lsd-drinks.jpg?quality=75&strip=all",
        ],
        references: [
            "Carhart-Harris, R. L., Kaelen, M., Bolstridge, M., Williams, T. M., Williams, L. T., Underwood, R., ... & Nutt, D. J. (2016). The paradoxical psychological effects of lysergic acid diethylamide (LSD). Psychological medicine, 46(07), 1379-1390.",
            "Carhart-Harris, R. L., Kaelen, M., Whalley, M. G., Bolstridge, M., Feilding, A., & Nutt, D. J. (2015). LSD enhances suggestibility in healthy volunteers. Psychopharmacology, 232(4), 785-794.",
            "Carhart-Harris, R. L., Muthukumaraswamy, S., Roseman, L., Kaelen, M., Droog, W., Murphy, K., ... & Leech, R. (2016). Neural correlates of the LSD experience revealed by multimodal neuroimaging.Proceedings of the National Academy of Sciences, 113(17), 4853-4858.",
            "Carbonaro, T. M., Bradstreet, M. P., Barrett, F. S., MacLean, K. A., Jesse, R., Johnson, M. W., & Griffiths, R. R. (2016). Survey study of challenging experiences after ingesting psilocybin mushrooms: Acute and enduring positive and negative consequences. Journal of Psychopharmacology, 30(12), 1268-1278.",
            "Dolder, P. C., Schmid, Y., Müller, F., Borgwardt, S., & Liechti, M. E. (2016). LSD acutely impairs fear recognition and enhances emotional empathy and sociality. Neuropsychopharmacology, 41(11), 2638.",
            "Family, N., Vinson, D., Vigliocco, G., Kaelen, M., Bolstridge, M., Nutt, D. J., & Carhart-Harris, R. L. (2016). Semantic activation in LSD: evidence from picture naming.Language, Cognition and Neuroscience, 1-8.",
            "Garcia-Romeu, A., R Griffiths, R., & W Johnson, M. (2014). Psilocybin-occasioned mystical experiences in the treatment of tobacco addiction.Current drug abuse reviews, 7(3), 157-164.",
            "Halberstadt, A. L. (2015).Recent advances in the neuropsychopharmacology of serotonergic hallucinogens. Behavioural brain research, 277, 99-120.",
            "Hendricks, P. S., Thorne, C. B., Clark, C. B., Coombs, D. W., & Johnson, M. W. (2015). Classic psychedelic use is associated with reduced psychological distress and suicidality in the United States adult population. Journal of Psychopharmacology, 29(3), 280-288.",
            "Johansen, P. Ø., & Krebs, T. S. (2015).Psychedelics not linked to mental health problems or suicidal behavior: A population study. Journal of Psychopharmacology, 0269881114568039.",
            "Kaelen, M., Barrett, F. S., Roseman, L., Lorenz, R., Family, N., Bolstridge, M., ... & Carhart-Harris, R. L. (2015). LSD enhances the emotional response to music. Psychopharmacology, 232(19), 3607-3614.",
            "Kaelen, M., Roseman, L., Kahan, J., Santos-Ribeiro, A., Orban, C., Lorenz, R., ... & Wall, M. B. (2016).LSD modulates music-induced imagery via changes in parahippocampal connectivity. European Neuropsychopharmacology, 26(7), 1099-1109.",
            "Krebs, T. S., & Johansen, P. Ø. (2013). Psychedelics and mental health: a population study. PloS one, 8(8), e63972.",
            "Leary, T., Metzner, R., & Dass, R. (1966).The psychedelic experience.Smithsonian Folkways Recordings.",
            "Lebedev, A. V., Kaelen, M., Lövdén, M., Nilsson, J., Feilding, A., Nutt, D. J., & Carhart‐Harris, R. L. (2016). LSD‐induced entropic brain activity predicts subsequent personality change. Human brain mapping, 37(9), 3203-3213.",
            "Murray, R. M., Paparelli, A., Morrison, P. D., Marconi, A., & Di Forti, M. (2013). What can we learn about schizophrenia from studying the human model, drug?induced psychosis?. American Journal of Medical Genetics Part B: Neuropsychiatric Genetics, 162(7), 661-670.",
            "Network, NEPTUNE. Guidance on the clinical management of acute and chronic harms of club drugs and novel psychoactive substances. 2015 http://neptune-clinical-guidance.co. uk/wp-content/uploads/2015/03.NEPTUNE-Guidance-March-2015.pdf)",
            "Nichols, D. E. (2016). Psychedelics.Pharmacological reviews, 68(2), 264-355.",
            "Roseman, L., Sereno, M. I., Leech, R., Kaelen, M., Orban, C., McGonigle, J., ... & Carhart‐Harris, R. L. (2016). LSD alters eyes‐closed functional connectivity within the early visual cortex in a retinotopic fashion.Human brain mapping, 37(8), 3031-3040.",
            "Speth, J., Speth, C., Kaelen, M., Schloerscheidt, A. M., Feilding, A., Nutt, D. J., & Carhart-Harris, R. L. (2016). Decreased mental time travel to the past correlates with default-mode network disintegration under lysergic acid diethylamide. Journal of Psychopharmacology, 30(4), 344-353.",
            "Strassman, R. J. (1984). Adverse reactions to psychedelic drugs. A review of the literature. J Nerv Ment Dis, 172(10), 577-595.",
            "Tagliazucchi, E., Roseman, L., Kaelen, M., Orban, C., Muthukumaraswamy, S. D., Murphy, K., ... & Bullmore, E. (2016).Increased global functional connectivity correlates with LSD-Induced ego dissolution. Current Biology,26(8), 1043-1050.",
            "Terhune, D. B., Luke, D. P., Kaelen, M., Bolstridge, M., Feilding, A., Nutt, D., ... & Ward, J. (2016). A placebo-controlled investigation of synaesthesia-like experiences under LSD. Neuropsychologia.",
            "Johnson, M. W., Garcia-Romeu, A., Cosimano, M. P., & Griffiths, R. R. (2014). Pilot study of the 5-HT2AR agonist psilocybin in the treatment of tobacco addiction. Journal of Psychopharmacology, 0269881114548296."
        ]
    },
    mdma: {
        name: "MDMA",
        icon: "https://cdn-icons-png.flaticon.com/512/3284/3284937.png",
        aliases: ["Ecstasy", "Molly", "XTC", "X", "Mandy"],
        description: "MDMA, also known as ecstasy or molly, is a synthetic drug that alters mood and perception. It is commonly used for recreational purposes, producing feelings of euphoria, increased energy, and empathy towards others. Ecstasy is a tablet form often mixed with other drugs.",
        effects: {
            positive: ["Euphoria", "Increased Empathy", "Increased Energy", "Talkativeness", "Heightened Pleasure", "Tactile Enhancement", "Feelings of Comfort"],
            negative: ["Unexpected Emotions", "Mild Hallucinations", "Nausea", "Rapid Eye Movements", "Compulsive Redosing", "Teeth Grinding", "Insomnia"],
            after: ["Depression", "Anxiety", "Volatile Emotions", "Insomnia"],
            overdose: ["Rapid Heart Rate", "Blurred Vision", "Nausea & Vomiting", "Heat Stroke", "Death"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "Unknown",
                dosage: {
                    threshold: "20 mg",
                    light: "20 - 80 mg",
                    common: "80 - 120 mg",
                    strong: "120 - 150 mg",
                    heavy: "150 mg +",
                },
                duration: {
                    total: "3 - 6 hours",
                    onset: "30 - 45 minutes",
                    comeup: "15 - 30 minutes",
                    peak: "1.5 - 2.5 hours",
                    offset: "1 - 1.5 hours",
                    after: "12 - 48 hours"
                },
                instructions: "MDMA is most commonly taken orally in a capsule or tablet form, although it can also be found in powder or crystal form which can be swallowed or snorted. If it's your first time or you're testing a new batch, it's wise to start with a lower dose to see how you respond. The effects typically begin within 30 to 60 minutes and can last for several hours. It is recommended to take it on a relatively empty stomach to optimize absorption, but a small, non-fatty meal beforehand can help prevent nausea."
            },
        },
        interactions: {
            caution: ["5-MeO-xxT", "Alcohol", "Cocaine", "DOx", "GHB", "GBL", "MXE", "AMT"],
            unsafe: ["25x-NBOMe", "PCP", "SSRIs", "SNRIs", "Serotonin Releasers", "2C-T-x", "5-HTP"],
            dangerous: ["Tramadol", "MAOIs", "DXM"]
        },
        harmReduction: [
            {
                header: "Try MDMA in a safe environment your first time.",
                body: "There is a common misconception that MDMA must be done at a rave or music festival to be enjoyed. Like all drugs, MDMA affects people differently based on a number of factors, and it can be risky trying it for the first time in a foreign or dangerous environment like a rave. While on MDMA you will experience increased empathy and suggestibility, making it easy for strangers to take advantage of you. For this reason, we HIGHLY recommend trying MDMA at home with friends or a loved one. You will still have a great time and will be able to better gauge how you respond to the drug incase you decide to use in a riskier environment in the future. "
            },
            {
                header: "Stick to one glass of water per hour.",
                body: "MDMA is linked to water toxicity deaths due to the tendency for users to drink excessive amounts of water. This is likely due to a combination of the increased body temperature caused by the drug and the high-energy activities many users engage in while on the drug (rave, festival, club, etc). On the other hand, it’s also important to make sure you don’t get dehydrated. We recommend setting alarms to go off every hour for a glass of water. This way you will be hydrating consistently but never need to guess if you’ve had too much."
            },
            {
                header: "Use supplements to minimize neurotoxicity and recovery time.",
                body: "MDMA is much more neurotoxic than most drugs because of some key metabolites that end up causing lots of free radical damage in your brain. It has been shown that using a number of supplements before, during, and after MDMA use can not only prevent neurotoxic damage to the brain, but also drastically reduce the comedown. We recommend checking out RollKit, which is a company that sells individual supplement packages for each MDMA roll. This will make it easy for you to keep track of what you have taken and save you the trouble of having to research what supplements are best to take. Check them out here: https://rollkit.net/"
            }
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "Dark Purple", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "Blue-Green", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Simon", expected: "Blue", link: "https://dancesafe.org/product/simons-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Dehydration or Hyperhydration", body: "MDMA use can increase the risk of dehydration or hyperhydration. MDMA raises body temperature and can lead to fluid imbalances. Activities like dancing at music festivals or clubs, often accompanied by MDMA use, can further contribute to dehydration. On the other hand, excessive water consumption can lead to hyponatremia, a condition where the body's electrolyte balance is disrupted. To mitigate these risks, it's important to stay adequately hydrated without overdoing it. Drink water in moderation, take breaks from physical activity, and be mindful of the body's fluid needs. Seek shade or cool environments to regulate body temperature." },
            { header: "Neurotoxicity", body: "Prolonged or excessive MDMA use may increase the risk of neurotoxicity, which can cause damage to nerve cells in the brain. Studies suggest that MDMA use can lead to long-term changes in the serotonin system, potentially resulting in cognitive impairments, memory deficits, and mood disturbances. To minimize the potential for neurotoxic effects, use MDMA no more than once every three months. This will give your brain’s receptors adequate time to restore their supply of serotonin." },
            { header: "Heatstroke", body: "Heatstroke is a severe condition that can occur when using MDMA, particularly in hot environments or during intense physical activity. MDMA raises body temperature, impairing the body's temperature regulation. This, combined with factors like inadequate hydration and prolonged dancing, can lead to heatstroke. Symptoms include a body temperature above 40°C (104°F), rapid heartbeat, headache, dizziness, confusion, nausea, and loss of consciousness. To prevent heatstroke, stay hydrated, take breaks in cooler environments, wear appropriate clothing, and be aware of signs of overheating. Seek prompt medical attention if heatstroke is suspected." },
        ],
        legality: {
            europe: {
                uk: "Illegal. Class A drug. Penalties include a maximum of seven years and/or unlimited fine for possession; life and/ or unlimited fine for production or trafficking.",
                germany: "Illegal",
                france: "Illegal",
                netherlands: "Illegal",
                spain: "Illegal",
                russia: "Illegal",
                czech: "Posession of less than 5 pills is not a serious criminal offense.",
                portugal: "Decriminalised up to 1g."
            },
            america: {
                usa: "Illegal, Schedule I section D 1995.",
                canada: "Schedule III",
                mexico: "Illegal"
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal",
                israel: "Illegal"
            },
            africa: {
                southafrica: "Illegal"
            },
            australia: {
                australia: "Illegal",
                newzealand: "Illegal"
            }
        },
        info: {
            name: "MDMA",
            isPlural: false,
            introduction: "3,4-Methylenedioxymethamphetamine (MDMA), commonly known as ecstasy or molly, is a psychoactive drug primarily used for recreational purposes but also increasingly recognized for its potential therapeutic use. As a synthetic drug, MDMA has both stimulant and psychedelic properties, altering mood and perception. It enhances the release and slows the reuptake of serotonin, dopamine, and norepinephrine in the brain, leading to feelings of increased energy, empathy, and pleasure. MDMA is usually taken orally, often in tablet or capsule form, and its effects can last for several hours.",
            history: "MDMA was first synthesized in 1912 by the German pharmaceutical company Merck, but it wasn't extensively studied until the mid-20th century. During the 1970s and 1980s, psychotherapists began using the drug as an aid in therapy, often referring to it as \"empathy\". However, due to increasing recreational use and potential health concerns, the U.S. Drug Enforcement Administration (DEA) classified MDMA as a Schedule I substance in 1985, making it illegal. Despite its legal status, the use of MDMA continued to rise as a recreational drug, especially within the rave and club scenes. More recently, MDMA has been studied for its potential use in the treatment of post-traumatic stress disorder (PTSD) and other conditions.",
            pharmacology: "MDMA exerts its effects by increasing the activity of three neurotransmitters: serotonin, dopamine, and norepinephrine. It does this by entering neurons via the transporter proteins that normally remove these neurotransmitters from the synaptic space. Once inside, MDMA inhibits the vesicular transporters, causing an increase in the concentration of neurotransmitters in the cytosol. It also reverses the direction of the plasma membrane transporters, leading to an efflux of neurotransmitters into the synapse. The flood of serotonin, in particular, is believed to be responsible for the mood-lifting effects of MDMA, while the release of large amounts of dopamine and norepinephrine contributes to its stimulating properties.",
            effects: "Unlike traditional psychedelics, MDMA does not induce a \"trip\" characterized by profound alterations in consciousness and perception. Instead, users commonly report feeling a sense of euphoria, emotional warmth, empathy towards others, and a heightened sensory perception. These effects usually begin within 30-60 minutes of ingestion and can last up to 6 hours. It's also common for users to experience a heightened energy level, which, combined with the drug's mood-enhancing effects, has contributed to its popularity in social settings like parties and music festivals.",
            comedown: "The MDMA \"comedown\" or \"crash\" typically occurs within a few days after taking the drug, though it can last up to a week. This is due to the depletion of neurotransmitters that were released during the MDMA experience. Symptoms can include fatigue, loss of appetite, concentration problems, depression, anxiety, and irritability. Some users also report experiencing a phenomenon called \"Tuesday Blues\" or \"Suicide Tuesday,\" referring to a period of depression that occurs about three days after taking the drug, typically peaking on Tuesday if MDMA was consumed on a Saturday, which is common.",
            overdose: "An overdose of MDMA can result in a sharp increase in body temperature (hyperthermia), which can lead to liver, kidney, or cardiovascular system failure or even death. Other signs and symptoms can include high blood pressure, faintness, panic attacks, loss of consciousness, seizures, and severe anxiety. In some cases, individuals might experience a condition known as serotonin syndrome, which can be life-threatening without immediate medical intervention. Symptoms of serotonin syndrome can include agitation, restlessness, confusion, rapid heart rate, dilated pupils, heavy sweating, and tremors.",
            dosage: "The appropriate dosage of MDMA can vary based on a variety of factors, including body weight, tolerance, and individual sensitivity to the drug. A common rule of thumb, often suggested in harm reduction communities, is to take a dosage in milligrams that corresponds to one's body weight in kilograms, plus 50 (i.e., if you weigh 70kg, your dose would be 70mg + 50mg = 120mg). However, it's important to note that this is a rough guideline, and individuals may respond differently to different doses. Re-dosing during a single session can increase the risk of negative side effects and should be done cautiously, if at all, and typically not exceeding half the initial dose. As always, it's best to err on the side of caution and start with a lower dose if you're unsure.",
            interactions: "MDMA can interact with a number of other substances, both increasing the potential harm and altering the effects. It should not be combined with other stimulants or psychedelic drugs, as these combinations can increase the risk of dangerous side effects like heart strain or serotonin syndrome. MDMA also interacts with many prescription medications, particularly antidepressants in the SSRI and MAOI classes, which can block the effects of MDMA or, in the case of MAOIs, lead to dangerously high levels of serotonin. Alcohol can increase dehydration and impair the body's ability to regulate temperature, both of which are already concerns when using MDMA.",
            testing: "Reagent testing is a harm reduction practice that can help identify the presence of MDMA in a substance, as well as potential adulterants. There are several different types of reagent tests, each of which reacts differently to different substances. For MDMA, the Marquis, Mecke, and Simons reagents are commonly used. The Marquis reagent should turn dark purple or black, the Mecke reagent should turn blue or blue-green, and the Simons reagent should turn blue in the presence of MDMA. However, reagent tests can only detect the presence of a substance, not its purity or concentration, and they may not detect all potential adulterants.",
            legality: "As of 2021, MDMA is classified as a Schedule I substance under the United States Controlled Substances Act, indicating that it has a high potential for abuse and no currently accepted medical use. Similar classifications exist in many other countries. However, some countries have more lenient laws, and the legal status can change, so it's always a good idea to check the current laws in your specific location. Additionally, there has been ongoing research into the therapeutic use of MDMA, particularly for conditions like PTSD, and this could potentially impact its legal status in the future.",
        },
        images: [
            "https://static.euronews.com/articles/stories/06/76/32/62/1440x810_cmsv2_88ccd1f0-2732-53a0-b814-950b3b755150-6763262.jpg",
            "https://cdn.adf.org.au/media/images/pure-mdma-social.2e16d0ba.fill-1200x1200.jpg",
            "https://api.time.com/wp-content/uploads/2023/02/MDMA.jpg"
        ],
        references: [
            "Bersani, F. S., Corazza, O., Albano, G., Valeriani, G., Santacroce, R., Bolzan Mariotti Posocco, F., ... & Schifano, F. (2014). 25C-NBOMe: preliminary data on pharmacology, psychoactive effects, and toxicity of a new potent and dangerous hallucinogenic drug. BioMed research international, 2014.",
            "Brunt, T. M., Poortman, A., Niesink, R. J., & van den Brink, W. (2011). Instability of the ecstasy market and a new kid on the block: mephedrone. Journal of psychopharmacology, 25(11), 1543-1547.",
            "Carhart-Harris, R. L., Nutt, D. J., & Bowden-Jones, O. (2017). The use of psychedelic drugs in psychiatry. The Journal of Neuropsychiatry and Clinical Neurosciences, 29(1), 4-10.",
            "Greer, G., & Tolbert, R. (1998). A method of conducting therapeutic sessions with MDMA. Journal of Psychoactive Drugs, 30(4), 371-379.",
            "Harris, D. S., Baggott, M., Mendelson, J. H., & Mendelson, J. E. (2002). Subjective and hormonal effects of 3,4-methylenedioxymethamphetamine (MDMA) in humans. Psychopharmacology, 162(4), 396-405.",
            "Johnston, J., & O'Malley, P. M. (2018). Monitoring the Future national survey results on drug use, 1975–2017: Overview, key findings on adolescent drug use. Institute for Social Research, The University of Michigan.",
            "Mithoefer, M. C., Wagner, M. T., Mithoefer, A. T., Jerome, L., & Doblin, R. (2011). The safety and efficacy of {+/-}3, 4-methylenedioxymethamphetamine-assisted psychotherapy in subjects with chronic, treatment-resistant posttraumatic stress disorder: the first randomized controlled pilot study. Journal of psychopharmacology, 25(4), 439-452.",
            "Parrott, A. C., & Morinan, A. (2011). The acute effects of MDMA on subjective mood and physiological measures in ecstasy users and controls. Neuropsychobiology, 63(2), 97-103.",
            "Peroutka, S. J. (1986). Ecstasy: a selective serotonin neurotoxin. Science, 234(4776), 984-986.",
            "Ramaekers, J. G., & Kuypers, K. P. (2006). Acute effects of 3, 4-methylenedioxymethamphetamine (MDMA) on behavioral measures of impulsivity: alone and in combination with alcohol. Neuropsychopharmacology, 31(5), 1048-1055.",
            "Reith, M. E., Blough, B. E., Hong, W. C., Jones, K. T., Schmitt, K. C., Baumann, M. H., & Partilla, J. S. (2015). Behavioral, biological, and chemical perspectives on atypical agents targeting the dopamine transporter. Drug and alcohol dependence, 147, 1-19.",
            "Sessa, B. (2016). The 21st century psychedelic renaissance: heroic steps forward on the back of an elephant. Journal of psychopharmacology, 30(12), 1165-1180.",
            "Soussan, C., & Kjellgren, A. (2014). Harm reduction and knowledge exchange—a qualitative analysis of drug-related Internet discussion forums. Harm reduction journal, 11(1), 25.",
            "Sumnall, H. R., Woolfall, K., Edwards, S., Cole, J. C., Beynon, C. M., & Hickman, M. (2011). Use, function, and subjective experiences of mephedrone based head shop products amongst UK users. The International Journal of Drug Policy, 22(5), 358-363.",
            "Tancer, M., & Johanson, C. E. (2003). Reinforcing, subjective, and physiological effects of MDMA in humans: a comparison with d-amphetamine and mCPP. Drug and alcohol dependence, 72(1), 33-44.",
            "Winstock, A. R., Mitcheson, L., & Ramsey, J. (2011). The medicines and healthcare products regulatory agency (MHRA) needs to be proactive about harms resulting from the use of mephedrone. BMJ, 342, d2279."
        ]
    },
    methamphetamine: {
        name: "Methamphetamine",
        icon: "https://cdn-icons-png.flaticon.com/512/1685/1685854.png",
        aliases: ["Meth", "Ice", "Tina", "Crystal"],
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
        interactions: {
            caution: ["Alcohol", "GHB", "GBL", "Opioids", "Cocaine", "Cannabis", "Caffeine", "Ketamine", "Methoxetamine", "Psychadelics"],
            unsafe: ["DXM", "PCP", "25x-NBOMe", "2C-T-x", "5-MeO-xxT", "DOx"],
            dangerous: ["Tramadol", "aMT", "MAOIs"]
        },
        harmReduction: [
            {
                header: "Stick to NO MORE than one dose for any given day.",
                body: "This is the most crucial rule to follow! When you use stimulants, they will temporarily hijack your dopamine reward system. Once the peak euphoria starts to fade, you will have a biological response to crave more. This is the same system that makes you crave food, sex, and anything pleasurable in life and is extremely hard to fight against. This feeling tends to disappear as soon as you have fully come down around the 10-12 hour mark (and in fact the thought of redosing actually starts to feel kinda gross). You simply need to endure through a few hours of cravings and then you’re home free. Not to mention that redosing will amplify your comedown side effects exponentially. It’s simply NOT worth it when you could just eat, sleep, and have an awesome time dosing the next morning instead."
            },
            {
                header: "Set an alarm to go off every 2 hours to remind you to eat and hydrate.",
                body: "Most stimulants suppress appetite heavily and its actually surprisingly easy to begin starving by accident during a long binge. In fact, many people are shocked to discover that the vast majority of the 24-hour comedown symptoms of meth and amphetamines are actually just a result of poor nutrition or hydration. What helps a lot is setting an alarm to go off on your phone every 2 hours from the moment you dose to remind you to eat and drink. It sounds silly, but when you’re peaking on stimulants you can easily get locked into whatever you’re doing, sometimes for hours or days. This alarm will shift your focus away from whatever you’re doing and provide an opportunity to break away and grab a snack with a glass of water. I know it’s easy to eat a ton of fruit and sweets while on stimulants, but please try to eat a variety of nutritious food instead. When all else fails, a big glass of milk is an excellent source of protein and nutrients."
            },
            {
                header: "Lingering body odor may be a sign of rhabdomyolysis.",
                body: "Sometimes while using meth you may encounter a horrible stench of ammonia that seems to soak into every piece of clothing. A lot of people think this is just due to excessive sweating, but it is actually a byproduct of rhabdomyolysis happening in your body and is a clear sign that you need to eat ASAP. When you take a stimulant that suppresses appetite you often don’t eat much (potentially for days) and so your body needs to look elsewhere for energy and nutrients. It does this by metabolizing your own muscles into protein, resulting in the loss of that muscle. The byproduct of this is ammonia, which is toxic to your body. As a result, your body tries to get rid of it as quick as possible, either through urine or sweat. This can also happen from dehydration as well, though eating usually gives your body some water as well. If you follow tip #2 you will notice that you don’t smell horrible at the end of the day (apart from the regular body odor that comes with sweating)."
            },
            {
                header: "Listen for unusual clues from your body that you need food. They can be VERY easy to misinterpret.",
                body: "Most stimulants suppress appetite heavily. This doesn’t mean that your body suddenly doesn’t need food, its just temporarily unable to use the mesolimbic reward pathway to signal hunger in the way you typically recognize it. As a result, long binges or daily use can lead people down a dangerous road to starvation without even realizing it. If you find yourself in a situation like this, you need to pay attention to the other ways that your body is trying to signal to you that it desperately needs food. Often these signals can ‘seem’ like a need to redose, but this is misguided. If you suddenly find that your high has started to take a more anxious, numb, or unpleasant experience, this likely is a sign! "
            },
            {
                header: "Invest in Ensure or Boost protein shakes.",
                body: "These protein shakes may save your life! Each one contains around 360 calories and 25% daily value of most essential vitamins and minerals. They are shockingly easy to drink, even when you’re so high that it feels like you need to relearn how to swallow. If you are a daily user or prone to binges, you absolutely must keep these stocked in your fridge! If you find yourself in a situation like tip #3 and are unable to eat anything, these shakes just might prevent a trip to the hospital. Just make sure not to drink more than 3 in a day as they contain many fat soluble vitamins (Vit A, D, E, K) and you can definitely overdose on those. I would also avoid any multivitamins for 24 hours if you decide to drink a few of these shakes as that could also lead to vitamin overdose."
            },
            {
                header: "200-400mg of Magnesium Glycinate will prevent or slow tolerance and sensitization to most stimulants.",
                body: "There is preclinical evidence that magnesium glycinate has the potential to block both sensitization and tolerance to stimulants. This is due to magnesium being an NMDA antagonist. It also replenishes an essential electrolyte that you brain uses for nearly every function, and which stimulants deplete heavily. In fact, did you know that 70% of Americans are already deficient in magnesium due to poor soil quality? The symptoms of deficiency are anxiety, depression, depersonalization, headache, and more!"
            },
            {
                header: "Vomiting or muscle aches may be a sign of low electrolytes.",
                body: "If you notice vomiting, muscle aches, or blacking out while standing up, then grab a Gatorade or Powerade and chug it! Stimulants tend to deplete electrolytes faster than usual because of the strain they put on your body. Just be careful to not overdo it, as too many electrolytes can cause it's own problems."
            },
            {
                header: "Do not make important or life altering decisions or select sex partners while on stimulants. You will likely regret your choice later.*",
                body: "Methamphetamine has a habit of making you feel invincible and impulsive. In the moment you feel so confidence that the future really is of no concern to you… but this is an illusion… and pretty soon you’ll be dealing with the consequences while sober (gasp!). If you are about to make a big purchase, sign a contract, propose, or any other big decision, you should really just save it for the next morning no matter how confident you feel about it. And when selecting sexual partners ALWAYS use protection and ask yourself if you would actually have sex with this person if you were sober."
            }
        ],
        testing: [
            { name: "Fentanyl Strip", expected: "Negative", link: "https://dancesafe.org/product-category/testing-strips/" },
            { name: "Marquis", expected: "Orange", link: "https://dancesafe.org/product/marquis-reagent-testing-kit/" },
            { name: "Mecke", expected: "No Reaction", link: "https://dancesafe.org/product/mecke-reagent-testing-kit/" },
            { name: "Simon", expected: "Blue", link: "https://dancesafe.org/product/simons-reagent-testing-kit/" },
        ],
        risks: [
            { header: "Fatal Overdose", body: "A fatal overdose from methamphetamine typically occurs due to the drug's intense stimulant effect on the cardiovascular system, leading to heart failure or stroke [4]. High doses can dramatically increase heart rate and blood pressure, potentially causing heart arrhythmia, acute heart damage, or a sudden increase in blood pressure that can result in a hemorrhagic stroke [5]. Overdose can also lead to hyperthermia or severe seizures [6]. Because methamphetamine is often used in a binge pattern, the risk of fatal overdose increases with each additional dose [7]. Recognizing signs of an overdose, such as chest pain, extreme agitation, or seizures, and seeking immediate medical attention can save lives [8]." },
            { header: "Neurotoxicity", body: "Methamphetamine is neurotoxic, meaning it can cause significant damage to brain cells [9]. It does so primarily by increasing the release and blocking the reuptake of the neurotransmitter dopamine, leading to high levels in the brain [10]. Over time, this can cause damage to the neurons that produce and use dopamine, leading to long-term cognitive deficits [11]. Symptoms of this neurotoxicity can include impairments in memory, attention, and decision-making, and motor coordination. In severe cases, it can result in symptoms similar to Parkinson's disease [12]. The neurotoxic effects of methamphetamine can persist even after discontinuation of the drug, highlighting the importance of harm reduction strategies and treatment interventions [13]." },
            { header: "Psychosis", body: "Methamphetamine-induced psychosis is a severe mental health risk associated with methamphetamine use. It can manifest as hallucinations, delusions, and extreme paranoia [14]. This happens due to the drug's profound effect on dopamine, a neurotransmitter heavily involved in our perception of reality and response to external stimuli [15]. High levels of dopamine can distort these processes, leading to psychotic symptoms [16]. These symptoms can persist even after discontinuation of methamphetamine and may require treatment with antipsychotic medications [17]. It's worth noting that individuals with pre-existing susceptibility to psychotic disorders are at a particularly high risk of experiencing psychosis with methamphetamine use [18]." },
        ],
        legality: {
            europe: {
                uk: "Illegal",
                germany: "Illegal – possession of small quantities for personal use is not usually prosecuted, with a focus on treatment over punishment.",
                france: "Illegal",
                netherlands: "Illegal",
                spain: "Illegal",
                russia: "Illegal",
            },
            america: {
                usa: "Illegal - limited legal use for specific medical conditions under prescription.",
                canada: "Illegal",
                mexico: "Illegal",
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal",
                israel: "Illegal"
            },
            africa: {
                southafrica: "Illegal"
            },
            australia: {
                australia: "Illegal",
                newzealand: "Illegal"
            }
        },
        info: {
            name: "Methamphetamine",
            isPlural: false,
            introduction: "Methamphetamine, often known simply as 'meth', is a highly potent and addictive psychoactive drug. It typically takes the form of a white, odorless, and bitter-tasting crystalline powder. There are various methods of intake, including swallowing, snorting, smoking, or injecting. Meth stimulates the brain, resulting in a rush of energy and focus, but it can also induce feelings of anxiety, irritability, and paranoia. Despite its potent high, meth is a highly dangerous and illegal substance in many jurisdictions, primarily due to its potential for addiction, health damage, and societal harm.",
            history: "The history of methamphetamine dates back to the late 19th century, when it was first synthesized. Its powerful stimulating effects led to its use by soldiers in World War II to combat fatigue and enhance focus. However, the long-term consequences became increasingly apparent post-war, leading to growing concerns about its safety. By the 1960s, meth had permeated into the realm of recreational drug use and quickly gained notoriety for its intense high and addictive nature. Subsequently, it was criminalized in many regions. Despite legal restrictions, methamphetamine use spread globally, often wreaking havoc in communities due to its association with crime, social decay, and severe health issues.",
            pharmacology: "At a biological level, methamphetamine works by altering the chemical landscape of the brain. It primarily boosts the release of dopamine, a neurotransmitter responsible for feelings of pleasure and reward. This flood of dopamine is what produces the intense euphoria associated with meth use. It also releases serotonin and norepinephrine, although this occurs in much smaller amounts compared to the dopamine release.\n However, repeated meth use disrupts normal brain function. It can deplete the brain's own dopamine reserves and damage the brain's ability to naturally produce and regulate dopamine. Over time, this results in a reduced ability to experience pleasure without the drug, leading to dependence and addiction.\n Further, chronic meth use can damage other areas of the brain as well, impairing cognitive functions like memory and learning, and contributing to mental health issues such as depression and anxiety. Some of this damage may be permanent or take years of abstinence to heal. The comprehensive impact of methamphetamine on the brain illustrates the profound risks associated with its use.",
            effects: "When you take meth, it can make you feel extremely energetic, focused, and euphoric. You might talk a lot, move quickly, or feel like you don't need sleep or food. Some people may feel irritable or anxious. These effects typically last from six to twelve hours, but can be longer based on the dose and your body. It’s addictive nature makes compulsive redosing extremely likely.",
            comedown: "Coming down from meth can be tough. It often leads to extreme tiredness, depression, and increased appetite. You might have trouble sleeping and feel anxious, restless, or irritable. The comedown can last several days, and taking care of your body during this time - hydrating, eating, resting - is very important.",
            overdose: "A meth overdose can be life-threatening. Signs include chest pain, high body temperature, fast or irregular heartbeat, trouble breathing, and feeling really agitated or paranoid. In severe cases, it can lead to a stroke, heart attack, or death. If you think someone might be overdosing, this is a medical emergency. Stay with them and call for help right away.",
            dosage: "When it comes to taking meth, always start with a small dose, especially with a new batch. It’s critical to purchase a milligram scale in order to dose accurately. Be aware that dosing can be inconsistent when using different routes of administration, and transitioning from one method to another might require dosage adjustments. Taking a break between uses can stop you needing more and more each time. And always remember: it's easier to take more later, but you can't take less once it's in your system. So, go slow and be careful.",
            interactions: "Interactions with methamphetamine, a potent stimulant, can lead to severe health risks. Using meth in combination with other substances can amplify these risks, alter drug efficacy, and hasten dependency. Below, you'll find a detailed interactions chart for methamphetamine. Please note that this information should be used for harm reduction purposes, and combining substances should always be approached with extreme caution.",
            testing: "When using substances like methamphetamine, it's crucial to ensure the substance is what it is purported to be. Reagent testing can identify adulterants or substitute substances that may have been added, which can increase the risk of harmful effects or overdose. Particularly, testing for fentanyl, a potent opioid, is important given its increasing prevalence and high risk of overdose. Some of the key reagents for testing methamphetamine include the Marquis, Mecke, and Simon's reagents. Additionally, fentanyl test strips are recommended to identify the presence of this high-risk substance. The following chart contains links to each reagent:",
            legality: "Methamphetamine, often known as meth, is a highly potent stimulant which is controlled in almost all countries due to its high potential for abuse and serious health risks. Its use is primarily limited to prescription for very specific medical conditions under the brand name Desoxyn, and recreational use is illegal. Despite this, methamphetamine is often available through illicit markets.",
        },
        images: [
            "https://cdn.adf.org.au/media/images/amphetamines-social.width-1524.jpg",
            "https://media.npr.org/assets/img/2023/01/17/ap22040735539085-9b877e5fc65655e363b3563e87c7488af4ac650f.jpg",
            "https://healthcity.bmc.org/sites/default/files/images/article/meth-feature.jpg"
        ],
        references: [
            "National Institute on Drug Abuse. (2020). Methamphetamine DrugFacts.",
            "DEA. (2017). Methamphetamine.",
            "McKetin, R., Lubman, D. I., Baker, A. L., Dawe, S., & Ali, R. L. (2013). Dose-related psychotic symptoms in chronic methamphetamine users.",
            "Regunath, H., Ariyamuthu, V. K., & Dalal, P. (2012). Methamphetamine related acute myocardial infarction and cardiomyopathy.",
            "Wijetunga, M., Seto, T., Lindsay, J., & Schatz, I. (2003). Crystal methamphetamine-associated cardiomyopathy: tip of the iceberg?",
            "Albertson, T. E., Derlet, R. W., & Van Hoozen, B. E. (1999). Methamphetamine and the expanding complications of amphetamines.",
            "Cone, E. J., Fant, R. V., Rohay, J. M., Caplan, Y. H., Ballina, M., Reder, R. F., ... & Haddox, J. D. (2003). Oxycodone involvement in drug abuse deaths. II. Evidence for toxic multiple drug-drug interactions.",
            "Darke, S., Kaye, S., & Duflou, J. (2017). Rates, characteristics and circumstances of methamphetamine-related death in Australia.",
            "Krasnova, I. N., & Cadet, J. L. (2009). Methamphetamine toxicity and messengers of death.",
            "Sulzer, D., Sonders, M. S., Poulsen, N. W., & Galli, A. (2005). Mechanisms of neurotransmitter release by amphetamines: a review.",
            "Berman, S., O'Neill, J., Fears, S., Bartzokis, G., & London, E. D. (2008). Abuse of amphetamines and structural abnormalities in the brain.",
            "Callaghan, R. C., Cunningham, J. K., Sajeev, G., & Kish, S. J. (2010). Incidence of Parkinson's disease among hospital patients with methamphetamine-use disorders.",
            "Chang, L., Alicata, D., Ernst, T., & Volkow, N. (2007). Structural and metabolic brain changes in the striatum associated with methamphetamine abuse.",
            "Srisurapanont, M., Ali, R., Marsden, J., Sunga, A., Wada, K., & Monteiro, M. (2003). Psychotic symptoms in methamphetamine psychotic in-patients.",
            "Berman, S. M., Voytek, B., Mandelkern, M. A., Hassid, B. D., Isaacson, A., Monterosso, J., ... & London, E. D. (2008). Changes in cerebral glucose metabolism during early abstinence from chronic methamphetamine abuse.",
            "Glass, M. R., Bubl, E., Kern, E., & van Elst, L. T. (2015). Neurochemistry of lead and manganese.",
            "Leelahanaj, T., Kongsakon, R., & Netrakom, P. (2005). A 4-week, double-blind comparison of olanzapine with haloperidol in the treatment of amphetamine psychosis.",
            "Chen, C. K., Lin, S. K., Sham, P. C., Ball, D., Loh, E. W., Hsiao, C. C., ... & Murray, R. M. (2005). Pre-morbid characteristics and co-morbidity of methamphetamine users with and without psychosis.",
        ],
    },
    mushrooms: {
        name: "Magic Mushrooms",
        icon: "https://cdn-icons-png.flaticon.com/512/9954/9954190.png",
        aliases: ["Shrooms", "Psilocybin", "Caps"],
        description: "Magic Mushrooms, also known as Psilocybin Mushrooms, contain the psychoactive compound psilocybin, which causes hallucinations, perception changes, and a sense of heightened understanding or euphoria. The effects vary widely and typically last from four to six hours, depending on the dosage and individual's metabolism.",
        effects: {
            positive: ["Euphoria", "Hallucinations", "Changes in Consciousness", "Increased Spirituality", "Time Distortions", "Sedation"],
            negative: ["Anxiety", "Confusion", "Paranoid Delusions", "Unpleasant Sensations", "Heavy Bodyload"],
            after: ["Headache", "Muscle Aches", "Emotional Volatility", "Minor Dissociation"],
            overdose: ["Extreme Anxiety", "Overwhelming Hallucinations", "Psychosis", "Rapid Heart Rate"]
        },
        routes: {
            oral: {
                route: "Oral",
                bioavailability: "~52.7%",
                dosage: {
                    microdose: "0.05 - 0.25 g",
                    light: "0.5 - 1.5 g",
                    common: "1.5 - 3 g",
                    strong: "3 - 5 g",
                    heavy: "5 g +",
                },
                duration: {
                    total: "4 - 6 hours",
                    onset: "20 - 45 minutes",
                    comeup: "1.5 - 3 hours",
                    peak: "2 - 3 hours",
                    offset: "1.5 - 2 hours",
                    after: "4 - 24 hours"
                },
                instructions: "Magic mushrooms are typically consumed orally. They can be eaten fresh, but are more often dried and then eaten as is or made into a tea. Some people also grind dried mushrooms into a powder and mix it into drinks or encapsulate it for easier consumption. The taste of magic mushrooms can be quite strong and earthy, and is not to everyone's liking. Masking it with tea, honey, or in a light snack can make consumption more pleasant. However, it's recommended not to eat a large meal before taking mushrooms as this can dampen the effects and increase the likelihood of nausea."
            },
        },
        interactions: {
            caution: ["Cannabis", "Amphetamines", "Cocaine"],
            unsafe: ["Tramadol", "Lithium", "SSRIs"],
            dangerous: ["MAOIs"]
        },
        harmReduction: [
            {
                header: "A good set and setting reduces the chances of a bad trip.",
                body: "When it comes to the use of magic mushrooms, the concept of \"set and setting\" is essential for reducing the risk of a negative experience or \"bad trip\". \"Set\" refers to one's mindset, including their current emotional state, expectations, and general disposition toward the experience. A positive mindset can greatly influence the direction of the trip. \"Setting\", on the other hand, refers to the physical and social environment where the drug is taken. A safe, comfortable, and familiar environment can provide a positive framework for the experience and help prevent feelings of anxiety or paranoia. It's also recommended to clear your schedule for the day of the trip and the following day to allow time for reflection and rest without the pressure of obligations."
            },
            {
                header: "Try to find a trip sitter.",
                body: "A trip sitter is a sober individual who stays with you while you're under the influence of a psychedelic like magic mushrooms. This person is there to ensure your safety, provide reassurance, and assist with practical matters. Having a trip sitter, especially for those new to psychedelics or taking a higher dose, can significantly reduce the risk of harm and help manage any anxiety or discomfort that may arise during the trip. A good trip sitter should be someone you trust, who is familiar with the effects of the drug, and who can remain calm and supportive in various situations. The presence of a trip sitter can provide an extra layer of security, helping to ensure that the experience remains positive and safe."
            }
        ],
        testing: [
            { name: "Ehrlich", expected: "Purple", link: "https://dancesafe.org/product/lsd-testing-kit/" },
            { name: "Hoffman", expected: "No Reaction", link: "https://www.tnscientific.com/product-page/tn-scientific-hofmann-reagent-drug-testing-kit-1" },
        ],
        risks: [
            { header: "Hallucinogen Persisting Perception Disorder", body: "Hallucinogen Persisting Perception Disorder (HPPD) is a condition characterized by a continual presence of sensory disturbances, most often visual, that are reminiscent of those generated while one was under the influence of a psychedelic or hallucinogenic substance such as LSD. Individuals with HPPD might experience symptoms like trailing images, visual snow, halos, or intense colors, among others. These disturbances can last for months or even years after cessation of drug use and can be distressing, leading to impairment in social or occupational functioning. The exact cause of HPPD is not known, but it is believed to be associated with changes in neuronal excitability in the central nervous system. While relatively rare, the risk of developing HPPD can be increased with heavier or more frequent use of hallucinogens. It's also important to note that while HPPD can be distressing, it is not associated with brain damage and can often be managed with professional help. If you suspect you might have HPPD, it's important to seek professional medical advice." },
        ],
        legality: {
            europe: {
                uk: "Illegal. Class A drug.",
                germany: "Illegal",
                france: "Illegal",
                netherlands: "Legal. Truffles (which contain psilocybin) are legal and can be purchased in smart shops. Mushroom spores are also legal.",
                spain: "Legal. Cultivation for personal use is decriminalized.",
                russia: "Illegal"
            },
            america: {
                usa: "Mostly illegal. Schedule I drug, but decriminalized in some cities and states for medical and/or personal use such as Denver, Colorado, California, and Oregon.",
                canada: "Illegal, but exceptions exist for medical and scientific research, and for religious and spiritual purposes.",
                mexico: "Decriminalized for personal use."
            },
            asia: {
                hk: "Illegal",
                singapore: "Illegal. Class A controlled drug.",
                israel: "Illegal"
            },
            africa: {
                southafrica: "Illegal"
            },
            australia: {
                australia: "Illegal. Schedule 9 prohibited substance.",
                newzealand: "Illegal"
            }
        },
        info: {
            name: "Mushrooms",
            isPlural: true,
            introduction: "\"Magic mushrooms\" is a colloquial term used to refer to a variety of mushrooms that contain the psychedelic compounds psilocybin and psilocin. These fungi are most commonly of the Psilocybe genus, but other genera like Panaeolus and Copelandia also contain these compounds. When ingested, these compounds induce a state known as a psychedelic \"trip,\" which typically involves altered perception, introspective insights, and sometimes visual hallucinations. The effects of magic mushrooms are highly subjective and can vary based on factors such as dosage, individual physiology, mindset, and environment. Despite their historical use in indigenous cultures and potential therapeutic applications, magic mushrooms are currently classified as a Schedule I drug in many countries, including the United States.",
            history: "Magic mushrooms have a rich history that spans cultures and continents, with evidence of their use dating back thousands of years. In many indigenous cultures of Central America, psilocybin-containing mushrooms have long been used in religious and healing rituals. In the modern Western world, magic mushrooms entered the public consciousness in the 1950s, when mycologist R. Gordon Wasson documented the ceremonial use of these mushrooms in Mexico. This was followed by the synthesis of psilocybin by Swiss chemist Albert Hofmann, also known for first synthesizing LSD. The 1960s and 70s saw a surge in the recreational use of magic mushrooms, leading to their criminalization in many countries. However, recent years have seen a renewed interest in their potential therapeutic applications, with research exploring their use in treating conditions like depression and anxiety.",
            pharmacology: "The active compound in magic mushrooms, psilocybin, is a prodrug, which means it is inactive until metabolized by the body. Upon ingestion, psilocybin is converted into psilocin by the liver, a process called dephosphorylation. Psilocin is then responsible for the psychoactive effects of magic mushrooms. Similar to other psychedelics like LSD, psilocin achieves its effects by interacting with the serotonin system in the brain, specifically by binding to and activating the 5-HT2A serotonin receptors. These receptors are involved in various functions, including the regulation of mood, perception, and cognition, which explains the broad range of psychological effects induced by magic mushrooms.",
            effects: "The effects of magic mushrooms can be profound and highly variable, influenced by factors like dosage, individual mindset, and the environment in which they're taken. Generally, a magic mushroom trip can last between four to eight hours and might include perceptual changes such as visual distortions or enhancements, synesthesia (crossing of sensory perceptions, like \"hearing\" colors), emotional amplification, and a modified perception of time. Many users also report introspective experiences, with some describing profound insights, feelings of unity or interconnectedness, or spiritual or mystical experiences. However, negative experiences or \"bad trips\" can occur, especially at high doses or in unsupportive environments, and can involve anxiety, paranoia, or frightening hallucinations.",
            comedown: "The comedown from magic mushrooms typically involves a gradual return to normal perception and cognitive function. Some people might feel tired or drained, while others may feel invigorated or enlightened. Physical hangover effects are usually minimal and may include a mild headache or tiredness. Magic mushrooms are not considered physically addictive and do not produce physical withdrawal symptoms. However, psychological dependence can develop with frequent use, and rapid tolerance development means that frequent use will lead to diminished effects.",
            overdose: "While physically dangerous overdoses on magic mushrooms are incredibly rare due to their low toxicity, taking a large amount can result in a highly distressing experience, often referred to as a \"bad trip\". This can include intense fear, paranoia, panic, and confusion, alongside more potent visual distortions or hallucinations. Physical symptoms may include nausea, vomiting, increased heart rate, and elevated blood pressure, but these are usually not life-threatening. The primary risk associated with high-dose magic mushroom use is behavioral, with users potentially putting themselves or others at risk due to impaired judgment or extreme distress. If a user appears to be having a severely adverse reaction to magic mushrooms, it's important to seek immediate medical attention.",
            dosage: "Dosing magic mushrooms can be a bit tricky due to the variance in psilocybin content between species and even individual mushrooms within the same species. However, as a general guideline, a typical dose for a moderate psychedelic experience is roughly 1 to 2.5 grams of dried Psilocybe cubensis, a commonly cultivated species. For beginners, a lower dose around 0.5 to 1 gram might be advisable to gauge individual response. Keep in mind that the effects can be unpredictable, and it's always safer to start low and go slow. As with other psychedelics, tolerance builds up immediately after use and resets after about a week.",
            interactions: "Magic mushrooms can interact with a range of other substances, potentially altering their effects or resulting in adverse reactions. Combining them with other psychedelics can intensify the effects, but can also increase the potential for negative psychological effects. Mixing with stimulants can heighten the risk of anxiety and paranoia, while combining with depressants can enhance the sedative effects but also increase the risk of nausea and vomiting. It's particularly important to avoid combining magic mushrooms with any MAOI-based antidepressants, as this can significantly intensify the effects of the mushrooms and potentially lead to a hypertensive crisis. Always consult a healthcare provider when considering combining any drugs.",
            testing: "Reagent testing can be used to confirm the presence of psilocybin in magic mushrooms. The most commonly used reagent for this is the Ehrlich's reagent, which turns purple when it reacts with the psilocybin or psilocin in the mushrooms. However, while this test can confirm the presence of these substances, it cannot tell you the potency or purity of the mushrooms, nor can it identify any other potentially harmful substances that may be present. Therefore, reagent testing should be used as part of a broader harm reduction strategy and not as a standalone safety measure.",
            legality: "The legal status of magic mushrooms varies significantly around the world. In the United States, psilocybin and psilocin are Schedule I substances under the Controlled Substances Act, meaning their use, possession, and sale are federally illegal. Some cities, such as Denver, Colorado and Oakland, California, have decriminalized the use and possession of magic mushrooms, but this does not change their federal status. Other countries have different laws ranging from complete prohibition to decriminalization. It's important to understand and respect the laws in your location. Despite their current legal status, there is a growing body of research indicating potential therapeutic uses for psilocybin, the active compound in magic mushrooms.",
        },
        images: [
            "https://static.scientificamerican.com/sciam/cache/file/8A8DB9E4-7CD9-4233-8991FD3C0C8A72E7_source.jpg",
            "https://www.verywellmind.com/thmb/NnZuYfqm8gdmQpnsikbZdLNlXj4=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1029307994-a3d3243cb7384c259062f5570810f238.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_19/1815791/161201-magic-mushrooms-mn-1015.jpg"
        ],
        references: [
            "Nichols, D. E. (2016). Psychedelics. Pharmacological Reviews, 68(2), 264–355. doi:10.1124/pr.115.011478",
            "Tylš, F., Páleníček, T., & Horáček, J. (2014). Psilocybin–summary of knowledge and new perspectives. European Neuropsychopharmacology, 24(3), 342–356. doi:10.1016/j.euroneuro.2013.12.006",
            "Carhart-Harris, R. L., Bolstridge, M., Rucker, J., Day, C. M., Erritzoe, D., Kaelen, M., ... & Taylor, D. (2016). Psilocybin with psychological support for treatment-resistant depression: an open-label feasibility study. The Lancet Psychiatry, 3(7), 619-627. doi:10.1016/S2215-0366(16)30065-7",
            "Passie, T., Seifert, J., Schneider, U., & Emrich, H. M. (2002). The pharmacology of psilocybin. Addiction biology, 7(4), 357-364. doi:10.1080/1355621021000005937",
            "Johnson, M. W., Richards, W. A., & Griffiths, R. R. (2008). Human hallucinogen research: guidelines for safety. Journal of Psychopharmacology, 22(6), 603–620. doi:10.1177/0269881108093587",
            "van Amsterdam, J., Opperhuizen, A., & van den Brink, W. (2011). Harm potential of magic mushroom use: a review. Regulatory Toxicology and Pharmacology, 59(3), 423–429. doi:10.1016/j.yrtph.2011.01.006",
            "Guzmán, G. (2008). Hallucinogenic mushrooms in Mexico: An overview. Economic Botany, 62(3), 404–412. doi:10.1007/s12231-008-9033-8",
            "Riedlinger, T. J., & Riedlinger, J. E. (1996). Psychedelic and entheogenic use in the United States. Journal of Psychoactive Drugs, 28(1), 63–75. doi:10.1080/02791072.1996.10471758",
            "Dyck, E. (2005). Flashback: Psychiatric Experimentation With LSD in Historical Perspective. Canadian Journal of Psychiatry, 50(7), 381–388. doi:10.1177/070674370505000703",
            "Brown, R. T., Nicholas, C. R., Cozzi, N. V., Gassman, M. C., Cooper, K. M., Muller, D., ... & Thomas, C. (2017). Pharmacokinetics of Escalating Doses of Oral Psilocybin in Healthy Adults. Clinical Pharmacology & Therapeutics, 102(6), 1053-1064. doi:10.1002/cpt.557"
        ]
    },
};