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