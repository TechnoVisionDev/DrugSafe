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
            "Centers for Disease Control and Prevention. (2020). Alcohol Poisoning Deaths.",
            "Testino, G., & Leone, S. (2019). Alcohol and hepatocellular carcinoma: a review and a point of view. World journal of gastroenterology, 25(43), 6384–6396.",
            "American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.).",
            "Bagnardi, V., Rota, M., Botteri, E., Tramacere, I., Islami, F., Fedirko, V., ... & Scotti, L. (2015). Alcohol consumption and site-specific cancer risk: a comprehensive dose–response meta-analysis. British journal of cancer, 112(3), 580-593."
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
                header: "Test your pills - there are lots of pressed pills nowadays.",
                body: ""
            },
            {
                header: "Avoid mixing with other depressants.",
                body: ""
            },
            {
                header: "Set a written dose regimen and stick to it.",
                body: ""
            },
            {
                header: "Stimulants will mask the effect of benzos.",
                body: ""
            },
            {
                header: "Avoid injecting due to severe complications.",
                body: ""
            },
            {
                header: "Asian people may have increased sensitivity.",
                body: ""
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
            "Dassanayake, T., Michie, P., Carter, G. and Jones, A. (2011). Effects of Benzodiazepines, Antidepressants and Opioids on Driving. Drug Safety, 34(2), pp.125-156. DOI: 10.2165/11539050-000000000-00000.",
            "Canada, H. (2018). Benzodiazepines - Canada.ca.",
            "Benzo.org.uk. (2012). Benzodiazepines: How They Work & How to Withdraw.",
            "Cooper, S. (1989). Benzodiazepines and appetite: Recent pre-clinical advances and their clinical implications. Human Psychopharmacology: Clinical and Experimental, 4(2), pp.81-89. DOI: 10.1002/hup.470040203.",
            "Hojer, J., Baehrendtz, S. and Gustafsson, L. (1989). Benzodiazepine poisoning: experience of 702 admissions to an intensive care unit during a 14-year period. Journal of Internal Medicine, 226(2), pp.117-122. DOI: 10.1111/j.1365-2796.1989.tb01365.x.",
            "Partanen, T., Vikatmaa, P., Tukiainen, E., Lepäntalo, M. and Vuola, J. (2009). Outcome after Injections of Crushed Tablets in Intravenous Drug Abusers in the Helsinki University Central Hospital. European Journal of Vascular and Endovascular Surgery, 37(6), pp.704-711. DOI: doi.org/10.1016/j.ejvs.2009.01.016.",
            "Starcevic, B. and Sicaja, M. (2007). Dual intoxication with diazepam and amphetamine: This drug interaction probably potentiates myocardial ischemia. Medical Hypotheses, 69(2), pp.377-380. DOI: 10.1016/j.mehy.2006.12.033.",
            "Mattila, M.J. and Nuotto E. (1983). Caffeine and theophylline counteract diazepam effects in man. Medical Biology, 61(6), pp.337-43.",
            "Emmanouil, D. and Quock, R. (2007). Advances in Understanding the Actions of Nitrous Oxide. Anesthesia Progress, 54(1), pp.9-18. DOI: 10.2344/0003-3006(2007)54[9:AIUTAO]2.0.CO;2.",
            "Jones, J., Mogali, S. and Comer, S. (2012). Polydrug abuse: A review of opioid and benzodiazepine combination use. Drug and Alcohol Dependence, 125(1-2), pp.8-18. DOI: 10.1016/j.drugalcdep.2012.07.004.",
            "Kroboth P.D., Smith R.B., Stoehr G.P. and Juhl R.P. (1985). Pharmacodynamic evaluation of the benzodiazepine-oral contraceptive interaction. Clinical pharmacology and therapeutics, 38(5), pp.525-32.",
            "D'Arcy P.F. (1986). Drug interactions with oral contraceptives. Drug Intelligence & Clinical Pharmacology, 20(5), pp.353-62.",
            "Starcevic, B. and Sicaja, M. (2007). Dual intoxication with diazepam and amphetamine: This drug interaction probably potentiates myocardial ischemia. Medical Hypotheses, 69(2), pp.377-380. DOI: 10.1016/j.mehy.2006.12.033.",
            "Parle, M. and Dhingra, D. (2003). Ascorbic Acid: a Promising Memory-Enhancer in Mice. Journal of Pharmacological Sciences, 93(2), pp.129-135. DOI: 10.1254/jphs.93.129.",
            "Partanen, T., Vikatmaa, P., Tukiainen, E., Lepäntalo, M. and Vuola, J. (2009). Outcome after Injections of Crushed Tablets in Intravenous Drug Abusers in the Helsinki University Central Hospital. European Journal of Vascular and Endovascular Surgery, 37(6), pp.704-711. DOI: 10.1016/j.ejvs.2009.01.016.",
            "Chen, J.P., Barron, C., Lin, K.M., and Chung, H. (2002). Prescribing medication for Asians with mental disorders. Western Journal of Medicine, 176(4), pp.271--275.",
            "Volkow, N.D., Wang, G.J., Fowler, J.S., Hitzemann, R., Gatley, S.J., Dewey, S.S., Pappas, N. (1998). Enhanced sensitivity to benzodiazepines in active cocaine-abusing subjects: a PET study. American Journal of Psychiatry, 155(2), pp.200-6.",
            "Verster, J. and Volkerts, E. (2006). Clinical Pharmacology, Clinical Efficacy, and Behavioral Toxicity of Alprazolam: A Review of the Literature. CNS Drug Reviews, 10(1), pp.45-76. DOI: 10.1111/j.1527-3458.2004.tb00003.x.",
            "Haque, W., Watson, D.J., Bryant, S.G. (1990). Death following suspected alprazolam withdrawal seizures: a case report. Texas Medicine, 86(1), pp.44-7.",
            "Barker, M., Greenwood, K., Jackson, M. and Crowe, S. (2004). Cognitive Effects of Long-Term Benzodiazepine Use. CNS Drugs, 18(1), pp.37-48. DOI: 10.2165/00023210-200418010-00004.",
            "Takada, M., Fujimoto, M. and Hosomi, K. (2016). Association between Benzodiazepine Use and Dementia: Data Mining of Different Medical Databases. International Journal of Medical Sciences, 13(11), pp.825-834. DOI: 10.7150/ijms.16185.",
            "Harnod, T., Wang, Y. and Kao, C. (2015). Association Between Benzodiazepine Use and Epilepsy Occurrence. Medicine, 94(37), p.e1571. DOI: 10.1097/md.0000000000001571.",
            "Riss, J., Cloyd, J., Gates, J. and Collins, S. (2008). Benzodiazepines in epilepsy: pharmacology and pharmacokinetics. Acta Neurologica Scandinavica, 118(2), pp.69-86. DOI: 10.1111/j.1600-0404.2008.01004.x.",
            "Kadoi, C., Hayasaka, S., Tsukamoto, E., Matsumoto, M., Hayasaka, Y. and Nagaki, Y. (2000). Bilateral Angle Closure Glaucoma and Visual Loss Precipitated by Antidepressant and Antianxiety Agents in a Patient with Depression. Ophthalmologica, 214(5), pp.360-361. DOI: 10.1159/000027521.",
            "Begleiter, H. and Kissin, B. (1996). The Pharmacology of Alcohol and Alcohol Dependence. New York: Oxford University Press, p.128.",
            "Ramsey-Williams, V., Wu, Y. and Rosenberg, H. (1994). Comparison of anticonvulsant tolerance, crosstolerance, and benzodiazepine receptor binding following chronic treatment with diazepam or midazolam. Pharmacology Biochemistry and Behavior, 48(3), pp.765-772. DOI: 10.1016/0091-3057(94)90344-1.",
            "Høiseth, G., Andås, H., Bachs, L. and Mørland, J. (2014). Impairment due to amphetamines and benzodiazepines, alone and in combination. Drug and Alcohol Dependence, 145, pp.174-179. DOI: 10.1016/j.drugalcdep.2014.10.013.",
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
            'National Institute on Drug Abuse (2021). What is marijuana?',
            'Grinspoon, P. (2018). Cannabidiol (CBD) — what we know and what we don’t. Harvard Health Blog.',
            'Volkow, N. D., Baler, R. D., Compton, W. M., & Weiss, S. R. (2014). Adverse Health Effects of Marijuana Use. The New England Journal of Medicine, 370, 2219-2227.',
            'Grotenhermen, F. (2003). Pharmacokinetics and pharmacodynamics of cannabinoids. Clinical Pharmacokinetics, 42(4), 327-360.',
            'Global Drug Survey (2021). GDS 2020: Key Findings Report.',
            'Meier, M. H., Caspi, A., Ambler, A., Harrington, H., Houts, R., Keefe, R. S., McDonald, K., Ward, A., Poulton, R., & Moffitt, T. E. (2012). Persistent cannabis users show neuropsychological decline from childhood to midlife. Proceedings of the National Academy of Sciences, 109(40), E2657-E2664.',
            'Centers for Disease Control and Prevention (2018). What You Need to Know About Marijuana Use and Pregnancy. ',
            'United Nations Office on Drugs and Crime (2018). World Drug Report.',
            'Addiction Center (2021). Marijuana Overdose.',
            'MedlinePlus (2021). Drug Interactions.',
            'DanceSafe (2021). Testing Strips.',
            'Drug Policy Alliance (2021). Cannabis Laws and Regulations.'
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
            "Kruegel, A. C., Grundmann, O. (May 2018). \"The medicinal chemistry and neuropharmacology of kratom: A preliminary discussion of a promising medicinal plant and analysis of its potential for abuse\". Neuropharmacology. 134: 108–120. doi:10.1016/j.neuropharm.2017.08.026. ISSN 0028-3908.",
            "Rech, M. A., Donahey, E., Cappiello Dziedzic, J. M., Oh, L., Greenhalgh, E. (February 2015). \"New Drugs of Abuse\". Pharmacotherapy: The Journal of Human Pharmacology and Drug Therapy. 35 (2): 189–197. doi:10.1002/phar.1522. ISSN 0277-0008.",
            "Commissioner, O. of the (2020), Statement from FDA Commissioner Scott Gottlieb, M.D., on the agency’s scientific evidence on the presence of opioid compounds in kratom, underscoring its potential for abuse, retrieved 6 February 2018",
            "DEA Announces Intent To Schedule Kratom, DEA, 2016, retrieved 31 August 2016",
            "Adkins, J. E., Boyer, E. W., McCurdy, C. R. (2011). \"Mitragyna speciosa, a psychoactive tree from Southeast Asia with opioid activity\". Current Topics in Medicinal Chemistry. 11 (9): 1165–1175. doi:10.2174/156802611795371305. ISSN 1873-4294.",
            "Chittrakarn, S., Keawpradub, N., Sawangjaroen, K., Kansenalak, S., Janchawee, B. (16 June 2010). \"The neuromuscular blockade produced by pure alkaloid, mitragynine and methanol extract of kratom leaves (Mitragyna speciosa Korth.)\". Journal of Ethnopharmacology. 129 (3): 344–349. doi:10.1016/j.jep.2010.03.035. ISSN 0378-8741.",
            "Prozialeck, W. C., Jivan, J. K., Andurkar, S. V. (December 2012). \"Pharmacology of kratom: an emerging botanical agent with stimulant, analgesic and opioid-like effects\". The Journal of the American Osteopathic Association. 112 (12): 792–799. ISSN 1945-1997.",
            "Takayama, H., Ishikawa, H., Kurihara, M., Kitajima, M., Aimi, N., Ponglux, D., Koyama, F., Matsumoto, K., Moriyama, T., Yamamoto, L. T., Watanabe, K., Murayama, T., Horie, S. (25 April 2002). \"Studies on the synthesis and opioid agonistic activities of mitragynine-related indole alkaloids: discovery of opioid agonists structurally different from other opioid ligands\". Journal of Medicinal Chemistry. 45 (9): 1949–1956. doi:10.1021/jm010576e. ISSN 0022-2623.",
            "Ward, J., Rosenbaum, C., Hernon, C., McCurdy, C. R., Boyer, E. W. (1 December 2011). \"Herbal medicines for the management of opioid addiction: safe and effective alternatives to conventional pharmacotherapy?\". CNS drugs. 25 (12): 999–1007. doi:10.2165/11596830-000000000-00000. ISSN 1179-1934.",
            "Kikura-Hanajiri, Ruri; Kawamura, Maiko; Maruyama, Takuro; Kitajima, Mariko; Takayama, Hiromitsu; Goda, Yukihiro (July 2009). \"Simultaneous analysis of mitragynine, 7-hydroxymitragynine, and other alkaloids in the psychotropic plant \"kratom\" (Mitragyna speciosa) by LC-ESI-MS\". Forensic Toxicology. 27 (2): 67–74. doi:10.1007/s11419-009-0070-5. ISSN 1860-8973.",
            "Baselt, R. C. (2014). Disposition of toxic drugs and chemicals in man (Tenth edition ed.). Biomedical Publications. ISBN 9780962652394.",
            "Matsumoto, Kenjiro; Takayama, Hiromitsu; Ishikawa, Hayato; Aimi, Norio; Ponglux, Dhavadee; Watanabe, Kazuo; Horie, Syunji (2006). \"Partial agonistic effect of 9-hydroxycorynantheidine on μ-opioid receptor in the guinea-pig ileum\". Life Sciences. 78 (19): 2265–2271. doi:10.1016/j.lfs.2005.09.030. ISSN 0024-3205.",
            "Kruegel, A. C., Gassaway, M. M., Kapoor, A., Váradi, A., Majumdar, S., Filizola, M., Javitch, J. A., Sames, D. (1 June 2016). \"Synthetic and Receptor Signaling Explorations of the Mitragyna Alkaloids: Mitragynine as an Atypical Molecular Framework for Opioid Receptor Modulators\". Journal of the American Chemical Society. 138 (21): 6754–6764. doi:10.1021/jacs.6b00360. ISSN 0002-7863.",
            "Matsumoto, Kinzo; Mizowaki, Maho; Suchitra, Thongpradichote; Murakami, Yukihisa; Takayama, Hiromitsu; Sakai, Shin-ichiro; Aimi, Norio; Watanabe, Hiroshi (1996). \"Central antinociceptive effects of mitragynine in mice: contribution of descending noradrenergic and serotonergic systems\". European Journal of Pharmacology. 317 (1): 75–81. doi:10.1016/S0014-2999(96)00714-5. ISSN 0014-2999.",
            "Kang, T.-H., Murakami, Y., Matsumoto, K., Takayama, H., Kitajima, M., Aimi, N., Watanabe, H. (22 November 2002). \"Rhynchophylline and isorhynchophylline inhibit NMDA receptors expressed in Xenopus oocytes\". European Journal of Pharmacology. 455 (1): 27–34. doi:10.1016/s0014-2999(02)02581-5. ISSN 0014-2999.",
            "JohnnyAuesome (2020), The Truth On Strains and Production Personally Witnessed",
            "http://kratomsources.com/2011/01/23/10-ways-how-to-take-kratom/",
            "How To Make Kratom Stronger: Kratom Potentiators | http://www.politiquessociales.net/how-to-make-kratom-stronger-kratom-potentiators/",
            "Bailey, D. G., Malcolm, J., Arnold, O., David Spence, J. (August 1998). \"Grapefruit juice–drug interactions\". British Journal of Clinical Pharmacology. 46 (2): 101–110. doi:10.1046/j.1365-2125.1998.00764.x. ISSN 0306-5251.",
            "Leclercq, I., Desager, J. P., Horsmans, Y. (August 1998). \"Inhibition of chlorzoxazone metabolism, a clinical probe for CYP2E1, by a single ingestion of watercress\". Clinical Pharmacology and Therapeutics. 64 (2): 144–149. doi:10.1016/S0009-9236(98)90147-3. ISSN 0009-9236.",
            "Kolesnikov, Y., Jain, S., Pasternak, G. W. (January 1996). \"Modulation of opioid analgesia by agmatine\". European Journal of Pharmacology. 296 (1): 17–22. doi:10.1016/0014-2999(95)00669-9. ISSN 0014-2999.",
            "Su, R.-B., Li, J., Qin, B.-Y. (July 2003). \"A biphasic opioid function modulator: agmatine\". Acta Pharmacologica Sinica. 24 (7): 631–636. ISSN 1671-4083."
        ]
    },
    lsd: {
        name: "LSD",
        icon: "https://cdn-icons-png.flaticon.com/512/4612/4612518.png",
        aliases: ["Acid", "Tab", "Lucy", "Lysergic Acid Diethylamide"],
        description: "",
        effects: {
            positive: ["Euphoria", "Hallucinations", "Changes in Consciousness", "Increased Spirituality", "Time Distortions"],
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
            unsafe: ["Tramadol", "Deliriants", "Tricyclic Antidepressants", "Ritonavir"],
            dangerous: ["Lithium"]
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
    methamphetamine: {
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
};