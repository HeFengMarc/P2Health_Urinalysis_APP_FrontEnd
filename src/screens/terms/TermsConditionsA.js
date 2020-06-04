/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

// import components
import Button from '../../components/buttons/Button';
import {Caption} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// TermsConditionsB Config
const APP_NAME = 'App Name';

// TermsConditionsB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  caption: {
    paddingBottom: 12,
    textAlign: 'left',
  },
  heading: {
    paddingBottom: 16,
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
    letterSpacing: 0.2,
    textAlign: 'left',
    // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' // iOS
  },
  textBlock: {
    paddingBottom: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primaryText,
    letterSpacing: 0.4,
    textAlign: 'left',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 1,

  },
  button: {
    width: '48%',
  },
});

// TermsConditionsB
export default class TermsConditionsB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />
        <ScrollView>
          <View style={styles.content}>
            <Caption style={styles.caption}>
              Last update: 25 May, 2020
            </Caption>


            <Text style={styles.heading}>Not Healthcare Advice</Text>
            <Text style={styles.textBlock}>
              {`The products and claims made about specific products on or through this Site have not been evaluated by the United States Food and Drug Administration and are not approved to diagnose, treat, cure or prevent disease. \n
P2Health App is not intended to provide diagnosis, treatment or medical advice. Products, services, information and other content provided on this Site, including information that may be provided on this Site directly or by linking to third-party websites are provided for informational purposes only. Please consult with a physician or other healthcare professional regarding any medical or health related diagnosis or treatment options. \n
Information provided on this Site and linked websites, including information relating to medical and health conditions, treatments and products may be provided in summary form. Information on this Site including any product label or packaging should not be considered as a substitute for advice from a healthcare professional. This Site does not recommend self-management of health issues. Information on this Site is not comprehensive and does not cover all diseases, ailments, physical conditions or their treatment. Contact your healthcare professional promptly should you have any health related questions. Never disregard or delay medical advice based upon information you may have read on this Site.\n
You should not use the information or services on this Site to diagnose or treat any health issues or for prescription of any medication or other treatment. You should always consult with your healthcare professional and read information provided by the product manufacturer and any product label or packaging, prior to using any medication, nutritional, herbal or homeopathic product or before beginning any exercise or diet program or starting any treatment for a health issue. Individuals are different and may react differently to different products. You should consult your physician about interactions between medications you are taking and nutritional supplements. \n
Always check the product label or packaging prior to using any product. If there are discrepancies, customers should follow the information provided on the product label or packaging. You should contact the manufacturer directly for clarification as to product labeling and packaging details and recommended use.
P2Health is not liable for any information provided on this application with regard to recommendations regarding supplements for any health purposes. The products or claims made about specific nutrients or products have not been evaluated by the Food and Drug Administration. Dietary products are not intended to treat, prevent or cure disease. Consult with a healthcare professional before starting any diet, supplement or exercise program. iHerb makes no guarantee or warranty with respect to any products or services sold.\n
P2Health is not responsible for any damages for information or services provided even if P2Health has been advised of the possibility of damages. `}
            </Text>

            <Text style={styles.heading}>Notice of Privacy Practices </Text>
            <Text style={styles.textBlock}>
              {`This Notice describes how medical information about you may be used and disclosed and how you can get access to this information.  Please review it carefully. \n
Personally identifiable information about your health, your health care, and your payment for health care is called Protected Health Information.  We must safeguard your Protected Health Information and give you this Notice about our privacy practices that explains how, when and why we may use or disclose your Protected Health Information.  Except in the situations set out in the Notice, we must use or disclose only the minimum necessary Protected Health Information to carry out the use or disclosure. \n
We must follow the practices described in this Notice, but we can change our privacy practices and the terms of this Notice at any time. \n
You also may ask for a copy of the Notice by calling us at 206-536-8855 and asking us to mail you a copy or by asking for a copy at your next appointment.\n
`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`Uses and Disclosures of Your Protected Health Information That Do Not Require Your Consent\n\n`}
              </Text>
              <Text style={{ fontWeight: 'bold' }}>
                {`For treatment purposes. `}
              </Text>
              {`We may disclose your health information to doctors, nurses and others who provide your health care.  For example, your information may be shared with people performing lab work or x-rays.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To obtain payment. `}
              </Text>
              {`We may disclose your health information in order to collect payment for your health care.  For instance, we may release information to your insurance company.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For health care operations. `}
              </Text>
              {`We may use or disclose your health information in order to perform business functions like employee evaluations and improving the service we provide.  We may disclose your information to students training with us.  We may use your information to contact you to remind you of your appointment or to call you by name in the waiting room when your doctor is ready to see you.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`When required by law. `}
              </Text>
              {`We may be required to disclose your Protected Health Information to law enforcement officers, courts or government agencies.  For example, we may have to report abuse, neglect or certain physical injuries.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For public health activities. `}
              </Text>
              {`We may be required to report your health information to government agencies to prevent or control disease or injury.  We also may have to report work-related illnesses and injuries to your employer so that your workplace may be monitored for safety.
\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For health oversight activities. `}
              </Text>
              {`We may be required to disclose your health information to government agencies so that they can monitor or license health care providers such as doctors and nurses.
\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For activities related to death. `}
              </Text>
              {`We may be required to disclose your health information to coroners, medical examiners and funeral directors so that they can carry out duties related to your death, such as determining the cause of death or preparing your body for burial.  We also may disclose your information to those involved with locating, storing or transplanting donor organs or tissue. \n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For studies. `}
              </Text>
              {`In order to serve our patient community, we may use or disclose your health information for research studies, but only after that use is approved by UWM's Institutional Review Board or a special privacy board.  In most cases, your information will be used for studies only with your permission.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To avert a threat to health or safety. `}
              </Text>
              {`In order to avoid a serious threat to health or safety, we may disclose health information to law enforcement officers or other persons who might prevent or lessen that threat.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For specific government functions. `}
              </Text>
              {`In certain situations, we may disclose health information of military officers and veterans, to correctional facilities, to government benefit programs, and for national security reasons.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For workers' compensation purposes. `}
              </Text>
              {`We may disclose your health information to government authorities under workers' compensation laws.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For fundraising purposes. `}
              </Text>
              {`We may use certain information (such as demographic information, dates of services, department of service, treating physicians, and outcomes) to send fundraising communications to you. However, you may opt out of receiving any such communications by contacting our Privacy Officer (listed below) and your decision to opt-out will have no impact on your treatment.\n\n`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`Uses and Disclosures of Your Protected Health Information That Offer You an Opportunity to Object\n\n`}
              </Text>
              {`In the following situations, we may disclose some of your Protected Health Information if we first inform you about the disclosure and you do not object:\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`In patient directories. `}
              </Text>
              {`Your name, location and general health condition may be listed in our patient directory for disclosure to callers or visitors who ask for you by name.  Additionally, your religion may be shared with clergy.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To your family, friends or others involved in your care. `}
              </Text>
              {`We may share with these people information related to their involvement in your care or information to notify them as to your location or general condition.  We may release your health information to organizations handling disaster relief efforts.\n\n`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`Uses and Disclosures of Your Protected Health Information That Require Your Consent\n\n`}
              </Text>
              {`The following uses and disclosures of your Protected Health Information will be made only with your written permission, which you may withdraw at any time:\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For research purposes. `}
              </Text>
              {`In order to serve our patient community, we may want to use your health information in research studies.  For example, researchers may want to see whether your treatment cured your illness.  In such an instance, we will ask you to complete a form allowing us to use or disclose your information for research purposes.  Completion of this form is completely voluntary and will have no effect on your treatment.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For marketing purposes. `}
              </Text>
              {`Without your permission, we will not send you mail or call you on the telephone in order to urge you to use a particular product or service, unless such a mailing or call is part of your treatment.  Additionally, without your permission we will not sell or otherwise disclose your Protected Health Information to any person or company seeking to market its products or services to you.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`Of psychotherapy notes. `}
              </Text>
              {`Without your permission, we will not use or disclose notes in which your doctor describes or analyzes a counseling session in which you participated, unless the use or disclosure is for on-site student training, for disclosure required by a court order, or for the sole use of the doctor who took the notes.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`For any other purposes not described in this Notice.  `}
              </Text>
              {`Without your permission, we will not use or disclose your health information under any circumstances that are not described in this Notice.\n\n`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`Your Rights Regarding Your Protected Health Information\n\n`}
              </Text>
              {`You have the following rights related to your Protected Health Information:\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To inspect and request a copy of your Protected Health Information. `}
              </Text>
              {`You may look at and obtain a copy of your Protected Health Information in most cases.  You may not view or copy psychotherapy notes, information collected for use in a legal or government action, and information which you cannot access by law.  If we use or maintain the requested information electronically, you may request that information in electronic format.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To request that we correct your Protected Health Information. `}
              </Text>
              {`If you think that there is a mistake or a gap in our file of your health information, you may ask us in writing to correct the file.  We may deny your request if we find that the file is correct and complete, not created by us, or not allowed to be disclosed.  If we deny your request, we will explain our reasons for the denial and your rights to have the request and denial and your written response added to your file.  If we approve your request, we will change the file, report that change to you, and tell others that need to know about the change in your file.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To request a restriction on the use or disclosure of your Protected Health Information. `}
              </Text>
              {`You may ask us to limit how we use or disclose your information, but we generally do not have to agree to your request.  An exception is that we must agree to a request not to send Protected Health Information to a health plan for purposes of payment or health care operations if you have paid in full for the related product or service.  If we agree to all or part of your request, we will put our agreement in writing and obey it except in emergency situations.  We cannot limit uses or disclosures that are required by law.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To request confidential communication methods. `}
              </Text>
              {`You may ask that we contact you at a certain address or in a certain way.  We must agree to your request as long as it is reasonably easy for us to do so.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To find out what disclosures have been made. `}
              </Text>
              {`You may get a list describing when, to whom, why, and what of your Protected Health Information has been disclosed during the past six years.  We must respond to your request within sixty days of receiving it.  We will only charge you for the list if you request more than one list per year.  The list will not include disclosures made to you or for purposes of treatment, payment, health care operations if we do not use electronic health records, our patient directory, national security, law enforcement, and certain health oversight activities.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To receive notice if your records have been breached. `}
              </Text>
              {`P2Health will notify you if there has been an acquisition, access, use or disclosure of your Protected Health Information in a manner not allowed under the law and which we are required by law to report to you.,   We will review any suspected breach to determine the appropriate response under the circumstances.\n\n`}
              <Text style={{ fontWeight: 'bold' }}>
                {`To obtain a paper copy of this Notice. `}
              </Text>
              {`Upon your request, we will give you a paper copy of this Notice. If you have any questions about these rights, please contact us at 206-536-8855.\n\n`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`How to Complain about Our Privacy Practices\n\n`}
              </Text>
              {`If you think we may have violated your privacy rights, or if you disagree with a decision we made about your Protected Health Information, you may file a complaint with our Privacy Officer by writing to [p2health@gmail.com.].\n\n`}

              <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                {`Effective Date\n\n`}
              </Text>
              {`This Notice is effective on May 24, 2020.`}

            </Text>




            <Text style={styles.heading}>Waiver and Release of Liability</Text>
            <Text style={styles.textBlock}>
              {`In consideration of the risk of injury while using P2Health App, and as consideration for the right to participate in the use of p2Health, I hereby, for myself, my heirs, executors, administrators, assigns, or personal representatives, knowingly and voluntarily enter into this waiver and release of liability and hereby waive any and all rights, claims or causes of action of any kind whatsoever arising out of my participation, and do hereby release and forever discharge, their affiliates, managers, members, agents, attorneys, staff, volunteers, heirs, representatives, predecessors, successors and assigns, for any physical or psychological injury, including but not limited to illness, paralysis, death, damages, economical or emotional loss, that I may suffer as a direct result of my participation in the aforementioned Activity, including traveling to and from an event related to this Activity.

I am voluntarily participating in the aforementioned activity and I am participating in the activity entirely at my own risk. I am aware of the risks associated with traveling to and from as well as participating in this activity, which may include, but are not limited to, physical or psychological injury, pain, suffering, illness, disfigurement, temporary or permanent disability (including paralysis), economic or emotional loss, and death. I understand that these injuries or outcomes may arise from my own or others' negligence, conditions related to travel, or the condition of the activity location(s). nonetheless, I assume all related risks, both known or unknown to me, of my participation in this activity, including travel to, from and during this activity.

I agree to indemnify and hold harmless against any and all claims, suits or actions of any kind whatsoever for liability, damages, compensation or otherwise brought by me or anyone on my behalf, including attorney's fees and any related costs, if litigation arises pursuant to any claims made by me or by anyone else acting on my behalf. If incurs any of these types of expenses, I agree to reimburse .

I acknowledge that and their directors, officers, volunteers, representatives and agents are not responsible for errors, omissions, acts or failures to act of any party or entity conducting a specific event or activity on behalf of .

I acknowledge that this Activity may involve a test of a person's physical and mental limits and may carry with it the potential for death, serious injury, and property loss. The risks may include, but are not limited to, those caused by terrain, facilities, temperature, weather, lack of hydration, condition of participants, equipment, vehicular traffic and actions of others, including but not limited to, participants, volunteers, spectators, coaches, event officials and event monitors, and/or producers of the event.

I acknowledge that I have carefully read this "waiver and release" and fully understand that it is a release of liability. I expressly agree to release and discharge and all of its affiliates, managers, members, agents, attorneys, staff, volunteers, heirs, representatives, predecessors, successors and assigns, from any and all claims or causes of action and I agree to voluntarily give up or waive any right that I otherwise have to bring a legal action against for personal injury or property damage.

To the extent that statute or case law does not prohibit releases for negligence, this release is also for negligence on the part of , its agents, and employees. In the event that I should require medical care or treatment, I agree to be financially responsible for any costs incurred as a result of such treatment. I am aware and understand that I should carry my own health insurance.

In the event that any damage to equipment or facilities occurs as a result of my or my family's willful actions, neglect or recklessness, I acknowledge and agree to be held liable for any and all costs associated with any actions of neglect or recklessness.\n
`}
            </Text>

          </View>
        </ScrollView>


      </SafeAreaView>
    );
  }
}
